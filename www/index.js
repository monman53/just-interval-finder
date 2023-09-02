import * as wasm from "just-interval-finder";

const renderLineVertex = `#version 300 es

precision highp float;

layout (location = 0) in float i_value;

uniform float u_length;
uniform float u_minValue;
uniform float u_maxValue;

#define linearstep(edge0, edge1, x) max(min((x - edge0) / (edge1 - edge0), 1.0), 0.0)

void main(void) {
  gl_Position = vec4(
    (float(gl_VertexID) / u_length) * 2.0 - 1.0,
    linearstep(u_minValue, u_maxValue, i_value) * 2.0 - 1.0,
    0.0,
    1.0
  );
}
`;

const renderLineFragment = `#version 300 es

precision highp float;

out vec4 o_color;

uniform vec3 u_color;

void main(void) {
  o_color = vec4(u_color, 1.0);
}
`;

function createShader(gl, source, type) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(shader) + source);
  }
  return shader;
}

function createProgram(gl, vertShader, fragShader) {
  const program = gl.createProgram();
  gl.attachShader(program, vertShader);
  gl.attachShader(program, fragShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error(gl.getProgramInfoLog(program));
  }
  return program;
}

function getUniformLocs(gl, program, names) {
  const map = new Map();
  names.forEach((name) => map.set(name, gl.getUniformLocation(program, name)));
  return map;
}

function createVbo(gl, array, usage) {
  const vbo = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
  gl.bufferData(gl.ARRAY_BUFFER, array, usage);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  return vbo;
}

const startButton = document.getElementById("button-start");
const maxFreq = document.getElementById("max-freq");
const fps = document.getElementById("fps");
const canvasTimeDomain = document.getElementById("canvas-raw");


startButton.addEventListener("click", async () => {
    const audioCtx = new AudioContext();
    const stream = await navigator.mediaDevices.getUserMedia({audio: true});
    const input  = audioCtx.createMediaStreamSource(stream);
    const analyzer = audioCtx.createAnalyser();
    input.connect(analyzer);
    // analyzer.fftSize = 4096 * 8;
    analyzer.fftSize = 512;

    const gl = canvasTimeDomain.getContext('webgl2');
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    const program = createProgram(gl,
        createShader(gl, renderLineVertex, gl.VERTEX_SHADER),
        createShader(gl, renderLineFragment, gl.FRAGMENT_SHADER));
    const uniformLocs = getUniformLocs(gl, program, ['u_length', 'u_minValue', 'u_maxValue', 'u_color']);

    const timeDomainArray = new Float32Array(analyzer.fftSize);
    const frequencyDomainArray = new Float32Array(analyzer.frequencyBinCount);

    const timeDomainVbo = createVbo(gl, timeDomainArray, gl.DYNAMIC_DRAW);
    const frequencyDomainVbo = createVbo(gl, frequencyDomainArray, gl.DYNAMIC_DRAW);

    let frames = 0;
    let startTime = new Date().getTime();

    const render = () => {
        // Calculate FPS
        frames += 1;
        let endTime = new Date().getTime();

        if (endTime - startTime >= 1000) {
            fps.innerText = frames / (endTime - startTime) * 1000;
            
            startTime = endTime;
            frames = 0;
        }

        console.log("render", analyzer.fftSize, audioCtx.sampleRate)
        analyzer.getFloatTimeDomainData(timeDomainArray);
        analyzer.getFloatFrequencyData(frequencyDomainArray);
        let res = wasm.wasm_test(timeDomainArray)
        maxFreq.innerText = res * audioCtx.sampleRate / analyzer.fftSize;
        requestAnimationFrame(render);

        // Canvas rendering
        // Time domain
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.bindBuffer(gl.ARRAY_BUFFER, timeDomainVbo);
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, timeDomainArray);
        gl.useProgram(program);

        gl.uniform1f(uniformLocs.get('u_length'), timeDomainArray.length);
        gl.uniform1f(uniformLocs.get('u_minValue'), -1.0);
        gl.uniform1f(uniformLocs.get('u_maxValue'), 1.0);
        gl.uniform3f(uniformLocs.get('u_color'), 1.0, 0.0, 0.0);
        gl.bindBuffer(gl.ARRAY_BUFFER, timeDomainVbo);
        gl.enableVertexAttribArray(0);
        gl.vertexAttribPointer(0, 1, gl.FLOAT, false, 0, 0);
        gl.drawArrays(gl.LINE_STRIP, 0, timeDomainArray.length);

        // Frequency domain
        gl.bindBuffer(gl.ARRAY_BUFFER, frequencyDomainVbo);
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, frequencyDomainArray);
        gl.useProgram(program);

        gl.uniform1f(uniformLocs.get('u_length'), frequencyDomainArray.length);
        gl.uniform1f(uniformLocs.get('u_minValue'), analyzer.minDecibels);
        gl.uniform1f(uniformLocs.get('u_maxValue'), analyzer.maxDecibels);
        gl.uniform3f(uniformLocs.get('u_color'), 0.0, 0.0, 1.0);
        gl.bindBuffer(gl.ARRAY_BUFFER, frequencyDomainVbo);
        gl.enableVertexAttribArray(0);
        gl.vertexAttribPointer(0, 1, gl.FLOAT, false, 0, 0);
        gl.drawArrays(gl.LINE_STRIP, 0, frequencyDomainArray.length);
    }

    requestAnimationFrame(render);
});
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../wasm/pkg/just_interval_finder.js":
/*!*******************************************!*\
  !*** ../wasm/pkg/just_interval_finder.js ***!
  \*******************************************/
/*! exports provided: __wbg_set_wasm, greet, wasm_test, __wbg_alert_9013be1e0a042176, __wbindgen_object_drop_ref, __wbg_length_d7327c75a759af37, __wbg_newwithlength_68d29ab115d0099c, __wbg_getindex_d9678f46b336573d, __wbg_setindex_52a6b33e1e52e957, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _just_interval_finder_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./just_interval_finder_bg.wasm */ \"../wasm/pkg/just_interval_finder_bg.wasm\");\n/* harmony import */ var _just_interval_finder_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./just_interval_finder_bg.js */ \"../wasm/pkg/just_interval_finder_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_wasm\", function() { return _just_interval_finder_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_wasm\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"greet\", function() { return _just_interval_finder_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"greet\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"wasm_test\", function() { return _just_interval_finder_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"wasm_test\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_alert_9013be1e0a042176\", function() { return _just_interval_finder_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_alert_9013be1e0a042176\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return _just_interval_finder_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_drop_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_length_d7327c75a759af37\", function() { return _just_interval_finder_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_length_d7327c75a759af37\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newwithlength_68d29ab115d0099c\", function() { return _just_interval_finder_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_newwithlength_68d29ab115d0099c\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getindex_d9678f46b336573d\", function() { return _just_interval_finder_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_getindex_d9678f46b336573d\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setindex_52a6b33e1e52e957\", function() { return _just_interval_finder_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_setindex_52a6b33e1e52e957\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _just_interval_finder_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\nObject(_just_interval_finder_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_wasm\"])(_just_interval_finder_bg_wasm__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n//# sourceURL=webpack:///../wasm/pkg/just_interval_finder.js?");

/***/ }),

/***/ "../wasm/pkg/just_interval_finder_bg.js":
/*!**********************************************!*\
  !*** ../wasm/pkg/just_interval_finder_bg.js ***!
  \**********************************************/
/*! exports provided: __wbg_set_wasm, greet, wasm_test, __wbg_alert_9013be1e0a042176, __wbindgen_object_drop_ref, __wbg_length_d7327c75a759af37, __wbg_newwithlength_68d29ab115d0099c, __wbg_getindex_d9678f46b336573d, __wbg_setindex_52a6b33e1e52e957, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_wasm\", function() { return __wbg_set_wasm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"greet\", function() { return greet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wasm_test\", function() { return wasm_test; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_alert_9013be1e0a042176\", function() { return __wbg_alert_9013be1e0a042176; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_length_d7327c75a759af37\", function() { return __wbg_length_d7327c75a759af37; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newwithlength_68d29ab115d0099c\", function() { return __wbg_newwithlength_68d29ab115d0099c; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getindex_d9678f46b336573d\", function() { return __wbg_getindex_d9678f46b336573d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setindex_52a6b33e1e52e957\", function() { return __wbg_setindex_52a6b33e1e52e957; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\nlet wasm;\nfunction __wbg_set_wasm(val) {\n    wasm = val;\n}\n\n\nconst heap = new Array(128).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 132) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = null;\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    ptr = ptr >>> 0;\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n/**\n*/\nfunction greet() {\n    wasm.greet();\n}\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n/**\n* @param {Float32Array} input\n* @returns {number}\n*/\nfunction wasm_test(input) {\n    const ret = wasm.wasm_test(addHeapObject(input));\n    return ret;\n}\n\nfunction __wbg_alert_9013be1e0a042176(arg0, arg1) {\n    alert(getStringFromWasm0(arg0, arg1));\n};\n\nfunction __wbindgen_object_drop_ref(arg0) {\n    takeObject(arg0);\n};\n\nfunction __wbg_length_d7327c75a759af37(arg0) {\n    const ret = getObject(arg0).length;\n    return ret;\n};\n\nfunction __wbg_newwithlength_68d29ab115d0099c(arg0) {\n    const ret = new Float32Array(arg0 >>> 0);\n    return addHeapObject(ret);\n};\n\nfunction __wbg_getindex_d9678f46b336573d(arg0, arg1) {\n    const ret = getObject(arg0)[arg1 >>> 0];\n    return ret;\n};\n\nfunction __wbg_setindex_52a6b33e1e52e957(arg0, arg1, arg2) {\n    getObject(arg0)[arg1 >>> 0] = arg2;\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../wasm/pkg/just_interval_finder_bg.js?");

/***/ }),

/***/ "../wasm/pkg/just_interval_finder_bg.wasm":
/*!************************************************!*\
  !*** ../wasm/pkg/just_interval_finder_bg.wasm ***!
  \************************************************/
/*! exports provided: memory, wasm_test, greet */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./just_interval_finder_bg.js */ \"../wasm/pkg/just_interval_finder_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../wasm/pkg/just_interval_finder_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var just_interval_finder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! just-interval-finder */ \"../wasm/pkg/just_interval_finder.js\");\n\n\nconst renderLineVertex = `#version 300 es\n\nprecision highp float;\n\nlayout (location = 0) in float i_value;\n\nuniform float u_length;\nuniform float u_minValue;\nuniform float u_maxValue;\n\n#define linearstep(edge0, edge1, x) max(min((x - edge0) / (edge1 - edge0), 1.0), 0.0)\n\nvoid main(void) {\n  gl_Position = vec4(\n    (float(gl_VertexID) / u_length) * 2.0 - 1.0,\n    linearstep(u_minValue, u_maxValue, i_value) * 2.0 - 1.0,\n    0.0,\n    1.0\n  );\n}\n`;\n\nconst renderLineFragment = `#version 300 es\n\nprecision highp float;\n\nout vec4 o_color;\n\nuniform vec3 u_color;\n\nvoid main(void) {\n  o_color = vec4(u_color, 1.0);\n}\n`;\n\nfunction createShader(gl, source, type) {\n  const shader = gl.createShader(type);\n  gl.shaderSource(shader, source);\n  gl.compileShader(shader);\n  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {\n    throw new Error(gl.getShaderInfoLog(shader) + source);\n  }\n  return shader;\n}\n\nfunction createProgram(gl, vertShader, fragShader) {\n  const program = gl.createProgram();\n  gl.attachShader(program, vertShader);\n  gl.attachShader(program, fragShader);\n  gl.linkProgram(program);\n  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {\n    throw new Error(gl.getProgramInfoLog(program));\n  }\n  return program;\n}\n\nfunction getUniformLocs(gl, program, names) {\n  const map = new Map();\n  names.forEach((name) => map.set(name, gl.getUniformLocation(program, name)));\n  return map;\n}\n\nfunction createVbo(gl, array, usage) {\n  const vbo = gl.createBuffer();\n  gl.bindBuffer(gl.ARRAY_BUFFER, vbo);\n  gl.bufferData(gl.ARRAY_BUFFER, array, usage);\n  gl.bindBuffer(gl.ARRAY_BUFFER, null);\n  return vbo;\n}\n\nconst startButton = document.getElementById(\"button-start\");\nconst maxFreq = document.getElementById(\"max-freq\");\nconst fps = document.getElementById(\"fps\");\nconst canvasTimeDomain = document.getElementById(\"canvas-raw\");\n\n\nstartButton.addEventListener(\"click\", async () => {\n    const audioCtx = new AudioContext();\n    const stream = await navigator.mediaDevices.getUserMedia({audio: true});\n    const input  = audioCtx.createMediaStreamSource(stream);\n    const analyzer = audioCtx.createAnalyser();\n    input.connect(analyzer);\n    // analyzer.fftSize = 4096 * 8;\n    analyzer.fftSize = 512;\n\n    const gl = canvasTimeDomain.getContext('webgl2');\n    gl.clearColor(0.0, 0.0, 0.0, 1.0);\n    const program = createProgram(gl,\n        createShader(gl, renderLineVertex, gl.VERTEX_SHADER),\n        createShader(gl, renderLineFragment, gl.FRAGMENT_SHADER));\n    const uniformLocs = getUniformLocs(gl, program, ['u_length', 'u_minValue', 'u_maxValue', 'u_color']);\n\n    const timeDomainArray = new Float32Array(analyzer.fftSize);\n    const frequencyDomainArray = new Float32Array(analyzer.frequencyBinCount);\n\n    const timeDomainVbo = createVbo(gl, timeDomainArray, gl.DYNAMIC_DRAW);\n    const frequencyDomainVbo = createVbo(gl, frequencyDomainArray, gl.DYNAMIC_DRAW);\n\n    let frames = 0;\n    let startTime = new Date().getTime();\n\n    const render = () => {\n        // Calculate FPS\n        frames += 1;\n        let endTime = new Date().getTime();\n\n        if (endTime - startTime >= 1000) {\n            fps.innerText = frames / (endTime - startTime) * 1000;\n            \n            startTime = endTime;\n            frames = 0;\n        }\n\n        console.log(\"render\", analyzer.fftSize, audioCtx.sampleRate)\n        analyzer.getFloatTimeDomainData(timeDomainArray);\n        analyzer.getFloatFrequencyData(frequencyDomainArray);\n        let res = just_interval_finder__WEBPACK_IMPORTED_MODULE_0__[\"wasm_test\"](timeDomainArray)\n        maxFreq.innerText = res * audioCtx.sampleRate / analyzer.fftSize;\n        requestAnimationFrame(render);\n\n        // Canvas rendering\n        // Time domain\n        gl.clear(gl.COLOR_BUFFER_BIT);\n        gl.bindBuffer(gl.ARRAY_BUFFER, timeDomainVbo);\n        gl.bufferSubData(gl.ARRAY_BUFFER, 0, timeDomainArray);\n        gl.useProgram(program);\n\n        gl.uniform1f(uniformLocs.get('u_length'), timeDomainArray.length);\n        gl.uniform1f(uniformLocs.get('u_minValue'), -1.0);\n        gl.uniform1f(uniformLocs.get('u_maxValue'), 1.0);\n        gl.uniform3f(uniformLocs.get('u_color'), 1.0, 0.0, 0.0);\n        gl.bindBuffer(gl.ARRAY_BUFFER, timeDomainVbo);\n        gl.enableVertexAttribArray(0);\n        gl.vertexAttribPointer(0, 1, gl.FLOAT, false, 0, 0);\n        gl.drawArrays(gl.LINE_STRIP, 0, timeDomainArray.length);\n\n        // Frequency domain\n        gl.bindBuffer(gl.ARRAY_BUFFER, frequencyDomainVbo);\n        gl.bufferSubData(gl.ARRAY_BUFFER, 0, frequencyDomainArray);\n        gl.useProgram(program);\n\n        gl.uniform1f(uniformLocs.get('u_length'), frequencyDomainArray.length);\n        gl.uniform1f(uniformLocs.get('u_minValue'), analyzer.minDecibels);\n        gl.uniform1f(uniformLocs.get('u_maxValue'), analyzer.maxDecibels);\n        gl.uniform3f(uniformLocs.get('u_color'), 0.0, 0.0, 1.0);\n        gl.bindBuffer(gl.ARRAY_BUFFER, frequencyDomainVbo);\n        gl.enableVertexAttribArray(0);\n        gl.vertexAttribPointer(0, 1, gl.FLOAT, false, 0, 0);\n        gl.drawArrays(gl.LINE_STRIP, 0, frequencyDomainArray.length);\n    }\n\n    requestAnimationFrame(render);\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);
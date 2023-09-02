mod utils;

use wasm_bindgen::prelude::*;
use js_sys::*;
use find_peaks::*;

use rustfft::{Fft, FftDirection, num_complex::Complex, algorithm::Radix4};

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, just-interval-finder!");
}

fn real_to_complex(input: js_sys::Float32Array) -> Vec<Complex<f32>> {
    let mut output = Vec::new();
    for i in 0..input.length() {
        output.push(Complex { re: input.get_index(i), im: 0.0f32 })
    }
    output
}

// fn complex_to_real(input: Vec<Complex<f32>>) -> (js_sys::Float32Array, js_sys::Float32Array) {
fn complex_to_real(input: Vec<Complex<f32>>) -> f32 {
    let output_re = js_sys::Float32Array::new_with_length(input.len() as u32);
    let output_im = js_sys::Float32Array::new_with_length(input.len() as u32);
    let mut max_val: f32 = 0.0;
    let mut max_idx: f32 = 0.0;
    for i in 0..((input.len()/2) as u32) {
        let f = input[i as usize];
        output_re.set_index(i, f.re);
        output_im.set_index(i, f.im);
        // if max_val < sqrt(f.re * f.re + f.im * f.im) {
        if max_val < f.norm_sqr() {
            max_val = f.norm_sqr();
            max_idx = i as f32;
        }
    }
    // (output_re, output_im)
    max_idx
}

#[wasm_bindgen]
// pub fn wasm_test(input: js_sys::Float32Array, min_height: f32, peaks: js_sys::Float32Array) -> Float32Array {
pub fn wasm_test(input: js_sys::Float32Array, min_height: f32, min_distance: usize) -> Float32Array {
    let input_size = input.length() as usize;
    let fft = Radix4::new(input_size, FftDirection::Forward);
    let mut buffer = real_to_complex(input);
    fft.process(&mut buffer);
    let norms: Vec<f32> = buffer.iter().map(|x| x.re).collect();
    let ps = find_peaks::PeakFinder::new(&norms)
        .with_min_height(min_height)
        .with_min_distance(min_distance)
        .find_peaks();
    let mut sorted: Vec<(f32, usize)> = ps.iter()
        .filter(|x| x.middle_position() < input_size / 2)
        .map(|x| (x.height.unwrap(), x.middle_position()))
        .collect::<Vec<(f32, usize)>>();
    sorted.sort_by(|a, b| b.partial_cmp(a).unwrap());
    let sorted = sorted.iter().map(|x| x.1).collect::<Vec<usize>>();
    let peaks = js_sys::Float32Array::new_with_length((sorted.len() * 2) as u32);
    for i in 0..peaks.length() {
        peaks.set_index(i, sorted[(i/2) as usize] as f32);
    }
    peaks
    // ps.iter().map(|x| x.middle_position() as f32).collect()
    // complex_to_real(buffer)
    // let (output_re, output_im) = complex_to_real(buffer);
    // vec![output_re, output_im]
}
// pub fn wasm_test(input: js_sys::Float32Array, fft_size: usize) -> Vec<js_sys::Float32Array> {
//     let fft = Radix4::new(fft_size, FftDirection::Forward);
//     let mut buffer = real_to_complex(input);
//     fft.process(&mut buffer);
//     let (output_re, output_im) = complex_to_real(buffer);
//     vec![output_re, output_im]
// }

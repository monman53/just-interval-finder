#!/bin/bash

set -e

pushd wasm
wasm-pack build
popd

pushd www
npm run build
popd

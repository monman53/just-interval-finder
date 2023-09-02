#!/bin/bash

set -e

pushd wasm
wasm-pack build
popd

pushd www
npm run build
rm -rf ../docs/*
cp dist/* ../docs
popd

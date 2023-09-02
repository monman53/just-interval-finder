#!/bin/bash

set -e

pushd wasm
wasm-pack build
popd

pushd www
rm -rf dist/*
rm -rf ../docs/*
npm run build
cp dist/* ../docs
popd

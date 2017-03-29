#!/bin/zsh

rm -rf ./src/*.html
rm -rf ./src/*.gs
cp ./*.html ./src/
cp ./*.gs ./src/

exec gapps push
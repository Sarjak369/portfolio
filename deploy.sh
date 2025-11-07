#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

# Replace with your repo URL
git push -f https://github.com/Sarjak369/portfolio.git main:gh-pages


cd -

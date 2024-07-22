#!/bin/bash
echo "Starting Building the project"
sleep 2
npx tailwindcss -i ./tailwind.css -o ./css/style.css
sleep 2
echo "Finished Building CSS"

rm -R ./dist
mkdir dist

cp -R ./public/index.html ./dist
echo "Done, Moving index.html"
cp -R ./public/css ./dist/css
echo "Done, Moving CSS"
cp -R ./public/images ./dist/
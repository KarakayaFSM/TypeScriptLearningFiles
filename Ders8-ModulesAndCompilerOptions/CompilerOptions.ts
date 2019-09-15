// Changing output file name
// tsc fileName.ts --out DifferentName.js

// Enable Compile On Save
// tsc --watch 

// "tsc -help" for help

// Using tsconfig file which is a .json file
// that includes compiler options to be read by the compiler
//this file is used instead of hardcoding in terminal

//to ceate tsconfig.json type tsc --init
//which has sample commands that comes out of box

//after tscofig.json is created, type just "tsc" to compilation

//OutputDir : the folder that you want your generated js files to go
//noEmitOnError : don't generate js file if there is an error
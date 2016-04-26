"use strict";
const fs = require('fs');
const path = require('path');

const sourcefilename = 'README.md';
const targetfilename = 'README2.md';

const files = [];
let n = 0;

for (var i = 0; i < 1000; i++) {
    fs.readFile(path.join(__dirname, sourcefilename), (err, source) => {
        if(err) throw err;
        else {
            fs.appendFile(path.join(__dirname, targetfilename), source.toString('utf8'), (err) => {
                n++;
                if(n == 900) {
                    console.log('im at 900th step now');
                }
            });
        }
    });
}

console.log('i am the next line')
console.log('i am the next, next line')
console.log('i am the next, next, next line')
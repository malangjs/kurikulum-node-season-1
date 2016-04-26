"use strict";
const fs = require('fs');
const path = require('path');

const sourcefilename = 'README.md';
const targetfilename = 'README2.md';

for (var i = 0; i < 1000; i++) {
    if(i == 900) {
        console.log('im at 900th step now');
    }
    const source = fs.readFileSync(path.join(__dirname, sourcefilename));
    fs.appendFileSync(path.join(__dirname, targetfilename), source.toString('utf8'));
}

console.log('i am the next line')
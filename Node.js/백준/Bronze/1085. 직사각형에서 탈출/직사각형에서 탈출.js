const [x, y, w, h] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let top = h - y;
let bottom = y;
let left = x;
let right = w - x;

console.log(Math.min(top, bottom, left, right));
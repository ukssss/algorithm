const [A, B, C] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
console.log(Number(A) + Number(B) + Number(C));
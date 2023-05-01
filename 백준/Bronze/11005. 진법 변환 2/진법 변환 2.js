const [N, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let ans = N.toString(B).toUpperCase();
console.log(ans);
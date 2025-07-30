const [N, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let ans = parseInt(N, Number(B));
console.log(ans);
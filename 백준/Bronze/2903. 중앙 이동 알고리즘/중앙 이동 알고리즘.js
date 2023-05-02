let N = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
console.log((2 ** N + 1) ** 2);
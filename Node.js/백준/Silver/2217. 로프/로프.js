const [N, ...list] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

list.sort((a, b) => a - b);
let max = list[0] * N;

for (let i = 1; i < N; i++) {
    weight = list[i] * (N - i);
    max = Math.max(max, weight);
}

console.log(max);
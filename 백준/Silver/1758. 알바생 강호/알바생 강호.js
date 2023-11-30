const [N, ...list] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

list.sort((a, b) => b - a);
let cnt = 0;

for (let i = 0; i < N; i++) {
    const tip = list[i] - (i + 1 - 1);
    cnt += tip > 0 ? tip : 0;
}

console.log(cnt);
const [NM, list] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((v) => v.split(' ').map(Number));

const [N, M] = NM;
let left = 0;
let right = 0;
let sum = list[left];
let cnt = 0;

while (left < N && right < N) {
    if (sum === M) cnt++;
    if (sum > M) sum -= list[left++];
    else sum += list[++right];
}

console.log(cnt);
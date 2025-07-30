const [first, ...level] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

const [N, K] = first.split(' ').map(Number);
const levelList = level.map(Number).sort((a, b) => a - b);

let min = Math.min(...levelList);
let max = Math.min(...levelList) + K;
let res = 0;

while (min <= max) {
    let mid = ~~((min + max) / 2);
    let tot = levelList
        .map((el) => el - mid)
        .filter((el) => el < 0)
        .map((el) => Math.abs(el))
        .reduce((acc, cur) => (acc += cur));

    if (tot <= K) {
        res = Math.max(mid, res);
        min = mid + 1;
    } else {
        max = mid - 1;
    }
}

console.log(res);
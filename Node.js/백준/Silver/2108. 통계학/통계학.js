const [, ...input] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

const list = input.sort((a, b) => a - b);
let ans = '';

// 산술평균

ans +=
    Math.round(list.reduce((acc, cur) => (acc += cur), 0) / list.length) + '\n';

// 중앙값

ans += list[Math.floor(list.length / 2)] + '\n';

// 최빈값

const map = new Map();
let max = 1;

for (let num of list) {
    if (map.has(num)) {
        max = Math.max(max, map.get(num) + 1);
        map.set(num, map.get(num) + 1);
    } else {
        map.set(num, 1);
    }
}

const arr = [];

for (let [key, val] of map) {
    if (val === max) {
        arr.push(key);
    }
}

ans += (arr.length === 1 ? arr[0] : arr[1]) + '\n';

// 범위

ans += list[list.length - 1] - list[0];

// 출력

console.log(ans);
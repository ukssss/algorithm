const [input, ...apple] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((v) => v.split(' ').map(Number));

const N = input[0];
const M = input[1];
const J = apple.shift();

let move = 0;
let left = 0;
let right = 0 + (M - 1);

for (let i = 0; i < apple.length; i++) {
    let temp = apple[i] - 1;

    if (temp > right) {
        move += temp - right;
        right = temp;
        left = temp - (M - 1);
    } else if (temp < left) {
        move += left - temp;
        left = temp;
        right = temp + (M - 1);
    }
}

console.log(move);
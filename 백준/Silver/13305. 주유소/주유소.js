const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input.shift();
const distance = input.shift().split(' ').map(Number);
const point = input.shift().split(' ').map(Number);

let temp = point[0];
let cnt = 0;

for (let i = 0; i < N - 1; i++) {
    temp = Math.min(temp, point[i]);
    cnt += temp * distance[i];
}

console.log(cnt);
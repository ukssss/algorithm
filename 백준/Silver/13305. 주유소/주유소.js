const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input.shift();
const distance = input.shift().split(' ').map(Number);
const point = input.shift().split(' ').map(Number);

let temp = BigInt(point[0]);
let cnt = BigInt(0);

for (let i = 0; i < N - 1; i++) {
    if (temp > BigInt(point[i])) {
        temp = BigInt(point[i]);
    }

    cnt += temp * BigInt(distance[i]);
}

console.log(String(cnt));
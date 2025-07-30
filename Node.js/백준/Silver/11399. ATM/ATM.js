const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input[0];
let wait_list = input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

let temp = 0;
let ans = 0;

for (let wait of wait_list) {
    temp += wait;
    ans += temp;
}

console.log(ans);
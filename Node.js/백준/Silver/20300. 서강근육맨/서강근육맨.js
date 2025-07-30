const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const damage = input[1]
    .split(' ')
    .map((i) => BigInt(i))
    .sort((a, b) => (a < b ? -1 : 1));
let N = +input[0];

let ans = 0;

if (N % 2 === 1) {
    ans = damage.pop();
    N -= 1;
}

for (let i = 0; i < N / 2; i++) {
    const temp = damage[i] + damage[damage.length - 1 - i];
    ans = ans < temp ? temp : ans;
}

console.log(String(ans));
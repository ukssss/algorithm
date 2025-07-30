const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input.shift();
const M = +input.shift();

let arr = [];
let before = 0;

for (let i = 0; i < M; i++) {
    const vip = +input.shift();
    const dp = Array(vip - before).fill(1);

    for (let j = 2; j < vip - before; j++) {
        dp[j] = dp[j - 1] + dp[j - 2];
    }

    arr.push(dp[vip - before - 1]);
    before = vip;
}

const remain = N - before;
if (remain > 1) {
    const dp = Array(remain + 1).fill(1);

    for (let j = 2; j < remain + 1; j++) {
        dp[j] = dp[j - 1] + dp[j - 2];
    }

    arr.push(dp[remain]);
    before = N;
}

const ans = arr.reduce((acc, cur) => acc * cur, 1);
console.log(ans);
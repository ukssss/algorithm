const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = +input.shift();
const ans = [];

for (let i = 0; i < T; i++) {
    const N = +input.shift();
    let dp = [];
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 1;
    dp[3] = 1;

    for (let j = 4; j <= N; j++) {
        dp[j] = dp[j - 2] + dp[j - 3];
    }

    ans.push(dp[N]);
}

console.log(ans.join('\n'));
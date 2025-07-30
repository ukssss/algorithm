const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = +input.shift();
const ans = [];

for (let i = 0; i < T; i++) {
    const n = +input.shift();
    const map = [];
    map.push(input.shift().split(' ').map(Number));
    map.push(input.shift().split(' ').map(Number));
    ans.push(sticker(n, map));
}

function sticker(n, arr) {
    let dp = Array.from({ length: n + 1 }, () => [0, 0]);

    dp[1][0] = arr[0][0];
    dp[1][1] = arr[1][0];

    for (let i = 2; i <= n; i++) {
        dp[i][0] = Math.max(dp[i - 1][1], dp[i - 2][1]) + arr[0][i - 1];
        dp[i][1] = Math.max(dp[i - 1][0], dp[i - 2][0]) + arr[1][i - 1];
    }

    return Math.max(...dp[n]);
}

console.log(ans.join('\n'));
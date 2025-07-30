const [n, r] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function solution(n, r) {
    const dp = new Array(r + 1).fill(0);
    dp[0] = BigInt(1);

    const factorial = new Array(n + 1).fill(0);
    factorial[0] = BigInt(1);
    for (let i = 1; i <= n; i++) {
        factorial[i] = factorial[i - 1] * BigInt(i);
    }

    for (let i = 1; i <= r; i++) {
        dp[i] = factorial[n] / (factorial[n - i] * factorial[i]);
    }

    return dp[r].toString();
}

const ans = solution(n, r);
console.log(ans);
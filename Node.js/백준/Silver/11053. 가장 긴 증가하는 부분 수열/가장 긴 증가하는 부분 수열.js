const [N, ...list] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(/\s+/)
    .map(Number);

list.unshift(0);

function solution(n) {
    const dp = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        let max = 0;
        for (let j = 1; j < i; j++) {
            if (list[i] > list[j] && dp[j] > max) {
                max = dp[j];
            }
        }
        dp[i] = max + 1;
    }

    return Math.max(...dp);
}

const ans = solution(N);
console.log(ans);
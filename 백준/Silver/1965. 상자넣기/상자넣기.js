const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input.shift();
const file = input.shift().split(' ').map(Number);

const dp = Array(n).fill(1);

for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
        if (file[j] < file[i]) {
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
}

console.log(Math.max(...dp));
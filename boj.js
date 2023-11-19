/* --------------------------------- ----------------------------------------- */
/*                                     BOJ                                    */
/* -------------------------------------------------------------------------- */

// CommonJS Modules
// 제출할 때는 example.txt -> /dev/stdin 로 변경할 것!
const N = +require('fs').readFileSync('example.txt').toString().trim();

const dp = Array(N + 1).fill(1);
dp[1] = 3;

for (let i = 2; i < N + 1; i++) {
    dp[i] = (dp[i - 1] * 2 + dp[i - 2]) % 9901;
}

console.log(dp[N]);

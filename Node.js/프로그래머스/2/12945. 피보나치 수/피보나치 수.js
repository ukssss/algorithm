function solution(n) {
    const dp = Array.from({length : n + 1}, () => 0);
    dp[1] = 1;
    
    for(let i = 2; i <= n; i++) {
        dp[i] = BigInt(dp[i - 2]) + BigInt(dp[i - 1]);
    }
    
    return dp[n] % 1234567n;
}
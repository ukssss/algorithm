function solution(triangle) {
    const dp = triangle.slice();

    for (let i = 1; i < dp.length; i++) {
        for (let j = 0; j < dp[i].length; j++) {
            const firstCase = dp[i - 1][j - 1] ?? 0;
            const secondCase = dp[i - 1][j] ?? 0;

            if (secondCase >= firstCase) {
                dp[i][j] += secondCase;
                continue;
            }
            dp[i][j] += firstCase;
        }
    }

    return Math.max(...dp.at(-1));
}

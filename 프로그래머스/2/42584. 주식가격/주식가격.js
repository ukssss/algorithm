function solution(prices) {
    const ans = [];

    for (let i = 0; i < prices.length; i++) {
        const num = prices[i];
        let cnt = 0;
        for (let j = i + 1; j < prices.length; j++) {
            cnt++;
            if (num > prices[j]) {
                break;
            }
        }
        ans.push(cnt);
    }

    return ans;
}
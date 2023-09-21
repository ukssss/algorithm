function solution(n) {
    let ans = 0;
    for(let i = 1; i <= n; i++) {
        let cnt = 0;
        
        for (let j = 1; j <= i; j++) {
            if(i % j === 0) {
                cnt++
            }
        }
        
        cnt >= 3 && ans++;
    }
    
    return ans;
}
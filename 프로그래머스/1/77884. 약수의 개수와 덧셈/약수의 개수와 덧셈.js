function solution(left, right) {
    let ans = 0;
    
    for(let i = left; i <= right; i++) {
        let cnt = 0;
        
        for(let j = 1; j <= i; j++) {
            if(i % j === 0)  cnt++;
        }
        
        cnt % 2 === 0 ? ans += i : ans -= i;
    }
    
    return ans;
}
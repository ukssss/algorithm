function solution(n) {
    let ans = 1;
    
    while(ans < n) {
        let tmp = n % ans;
        if(tmp === 1) return ans;
        else ans++;
    }
}
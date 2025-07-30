function solution(left, right) {
    let ans = 0;
    
    for(let i = left; i <= right; i++) {
        const tmp = Math.sqrt(i);
        if(!Number.isInteger(tmp)) ans += i;
        else ans -= i;
    }
    
    return ans;
}
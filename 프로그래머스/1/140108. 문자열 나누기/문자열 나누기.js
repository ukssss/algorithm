function solution(s) {
    let ans = 0;
    let count = 0;
    let current = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(count === 0) {
            ans++;
            current = s[i];
            count++;
        } else if (current !== s[i]) {
            count--;
        } else if (current === s[i]) {
            count++;
        }
    }
    
    return ans;
}
function solution(n) {
    let cnt = 0;
    
    for(let i = 1; i <= n; i++) {
        let tmp = i;
        let idx = 1;
        while (tmp < n) {
            const next = i + idx;
            tmp += next;
            idx++;
        }
        tmp === n && cnt++;
    }
    
    return cnt;
}
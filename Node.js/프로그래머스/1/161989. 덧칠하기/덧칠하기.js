function solution(n, m, section) {
    let ans = 0;
    let start = 0;
    for(let area of section) {
        if(start < area) {
            ans++;
            start = area + m - 1
        }
    }
    
    return ans;
}
function solution(t, p) {
    let cnt = 0;
    
    for(let i = 0; i < t.length - p.length + 1; i++) {
        const temp = t.slice(i, i + p.length);
        if(Number(temp) <= Number(p)) cnt++;
    }
    
    return cnt;
}
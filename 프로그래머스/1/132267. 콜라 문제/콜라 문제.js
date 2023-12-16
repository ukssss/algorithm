function solution(a, b, n) {
    let cnt = 0;
    
    while(n !== 0) {
        let point = Math.floor(n / a);
        let service = point * b;
        if (service === 0) break;
    
        n = (n - point * a) + service;
        cnt += service;
    }
    
    return cnt;
}
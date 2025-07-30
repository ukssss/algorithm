function solution(n) {
    const tmp = Math.sqrt(n);
    return tmp % 1 === 0 ? Math.pow(tmp + 1, 2) : -1; 
}
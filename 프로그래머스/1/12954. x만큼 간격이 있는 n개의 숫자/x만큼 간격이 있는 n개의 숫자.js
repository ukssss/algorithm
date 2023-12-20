function solution(x, n) {
    const arr = [];
    let cnt = 1;
    
    for(let i = 1; i <= n; i++) arr.push(i * x);
    return arr;
}
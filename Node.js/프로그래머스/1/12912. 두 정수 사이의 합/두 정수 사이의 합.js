function solution(a, b) {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    let cnt = 0;
    for(let i = min; i <= max; i++) cnt += i;
    return cnt;
}
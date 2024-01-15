function solution(n, left, right) {
    const arr = [];
    for (let i = left; i <= right; i++) {
        const divide = Math.floor(i / n);
        const rest = i % n;
        arr.push(divide >= rest ? divide + 1 : rest + 1);
    }
    return arr;
}
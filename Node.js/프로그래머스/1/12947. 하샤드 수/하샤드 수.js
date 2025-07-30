function solution(x) {
    const total = String(x).split("").map(Number).reduce((acc, cur) => acc + cur, 0);
    return x % total === 0;
}
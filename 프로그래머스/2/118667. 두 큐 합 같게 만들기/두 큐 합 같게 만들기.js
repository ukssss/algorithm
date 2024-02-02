function solution(queue1, queue2) {
    let sum1 = queue1.reduce((pre, cur) => pre + cur, 0);
    let sum2 = queue2.reduce((pre, cur) => pre + cur, 0);
    const half = (sum1 + sum2) / 2;
    const q = [...queue1, ...queue2];
    let p1 = 0;
    let p2 = queue1.length;
    let cnt = 0;

    while (p1 < q.length && p2 < q.length) {
        if (sum1 === half) return cnt;
        sum1 = sum1 > half ? sum1 - q[p1++ % q.length] : sum1 + q[p2++ % q.length];
        cnt++;
    }

    return -1;
}
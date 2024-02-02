function solution(queue1, queue2) {
    const q = [...queue1, ...queue2];
    let sum1 = queue1.reduce((pre, cur) => pre + cur, 0);
    let sum2 = queue2.reduce((pre, cur) => pre + cur, 0);
    let half = (sum1 + sum2) / 2;
    let q1 = 0;
    let q2 = queue1.length;
    let cnt = 0;

    while (q1 < q.length && q2 < q.length) {
        if (sum1 === half) return cnt;
        if (sum1 > half) sum1 = sum1 - q[q1++ % q.length];
        else sum1 = sum1 + q[q2++ % q.length];
        cnt++;
    }

    return -1;
}
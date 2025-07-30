function solution(k, m, score) {
    let cnt = 0;
    score.sort((a, b) => b - a);
    score.forEach((s, idx) => {
        if(idx % m === 0) {
            const temp = score.slice(idx, idx + m);
            cnt += !isNaN(temp[m - 1] * m) && temp[m - 1] * m;
        }
    })
    return cnt;
}
function solution(n, k) {
    const answer = [];
    let arr = Array.from({ length: n }, (_, idx) => idx + 1);
    let fac = arr.reduce((acc, cur) => acc * cur, 1);
    k--;

    while (answer.length !== n) {
        fac = fac / arr.length;
        let tmp = arr[Math.floor(k / fac)];
        answer.push(tmp);
        k = k % fac;
        arr = arr.filter((v) => v !== tmp);
    }

    return answer;
}
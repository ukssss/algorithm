function solution(land) {
    let answer = 0;
    for (let i = 0; i < land.length; i++) {
        for (let j = 0; j < 4; j++) {
            if (i === 0) {
                continue;
            } else {
                const arr = land[i - 1].slice();
                arr[j] = 0;
                land[i][j] += Math.max(...arr);
                answer = Math.max(answer, land[i][j]);
            }
        }
    }
    return answer;
}
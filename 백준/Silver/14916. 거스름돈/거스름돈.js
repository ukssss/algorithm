const input = +require('fs').readFileSync('/dev/stdin').toString().trim();

function solution(n) {
    let cnt = 0;
    if (n === 1 || n === 3) return -1;

    while (n > 0) {
        if (n % 2 === 1 || n % 5 === 0) {
            cnt += 1;
            n -= 5;
        } else if (n % 2 === 0) {
            cnt += 1;
            n -= 2;
        }
    }

    return cnt;
}

const ans = solution(input);
console.log(ans);
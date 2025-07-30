const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const lectures = input[1].split(' ').map(Number);

let left = 0;
let right = lectures.reduce((acc, cur) => acc + cur, 0);
let ans = Infinity;

while (left <= right) {
    let mid = parseInt((left + right) / 2);
    let cnt = 1;
    let sum = 0;

    for (let i = 0; i < N; i++) {
        if (lectures[i] > mid) {
            cnt = Infinity;
            break;
        }

        if (sum + lectures[i] <= mid) {
            sum += lectures[i];
        } else {
            cnt++;
            sum = lectures[i];
        }
    }

    if (cnt <= M) {
        right = mid - 1;
        ans = Math.min(ans, mid);
    } else {
        left = mid + 1;
    }
}

console.log(ans);
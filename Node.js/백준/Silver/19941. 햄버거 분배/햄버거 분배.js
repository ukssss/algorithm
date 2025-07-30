const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const map = input[1].split('');

let cnt = 0;

for (let i = 0; i < N; i++) {
    let start = i - K;
    let end = i + K;

    if (map[i] === 'P') {
        for (let j = start; j <= end; j++) {
            if (map[j] === 'H') {
                cnt++;
                map[j] = 'D';
                break;
            }
        }
    }
}

console.log(cnt);
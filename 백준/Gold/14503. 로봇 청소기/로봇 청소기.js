const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
let [r, c, d] = input.shift().split(' ').map(Number);

const room = input.map((arr) => arr.split(' ').map(Number));
const visited = Array.from({ length: N }, () => Array.from({ length: M }, () => false));
const drow = [-1, 0, 1, 0];
const dcol = [0, 1, 0, -1];

let ans = 0;
let cnt = 0;

while (1) {
    if (cnt === 4) {
        const [backRow, backCol] = [r + drow[(d + 6) % 4], c + dcol[(d + 6) % 4]];
        if (room[backRow][backCol] === 1) break;
        else {
            r = backRow;
            c = backCol;
            cnt = 0;
        }
    }

    if (!visited[r][c]) {
        visited[r][c] = true;
        room[r][c] = 2;
        ans++;
    }

    const [leftRow, leftCol] = [r + drow[(d + 3) % 4], c + dcol[(d + 3) % 4]];
    if (room[leftRow][leftCol] === 0) {
        r = leftRow;
        c = leftCol;
        cnt = 0;
    } else {
        cnt++;
    }
    d = (d + 3) % 4;
}

console.log(ans);
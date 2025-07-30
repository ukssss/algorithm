const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
let [row, col, dir] = input.shift().split(' ').map(Number);

const room = input.map((arr) => arr.split(' ').map(Number));
const visited = Array.from({ length: N }, () => Array.from({ length: M }, () => false));
const drow = [-1, 0, 1, 0];
const dcol = [0, 1, 0, -1];
let cnt = 0;
let ans = 0;

while (1) {
    if (cnt === 4) {
        const [backRow, backCol] = [row + drow[(dir + 2) % 4], col + dcol[(dir + 2) % 4]];
        if (room[backRow][backCol] === 1) break;
        else {
            row = backRow;
            col = backCol;
            cnt = 0;
        }
    }

    if (!visited[row][col]) {
        visited[row][col] = true;
        room[row][col] = 2;
        ans++;
    }

    const [leftRow, leftCol] = [row + drow[(dir + 3) % 4], col + dcol[(dir + 3) % 4]];
    if (room[leftRow][leftCol] === 0) {
        row = leftRow;
        col = leftCol;
        cnt = 0;
    } else {
        cnt++;
    }
    dir = (dir + 3) % 4;
}

console.log(ans);
const [N, ...map] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((arr, index) => {
        if (index === 0) {
            return Number(arr);
        } else {
            return arr.split('').map(Number);
        }
    });

const visited = {};
const ans = [];
const bfs = (x, y) => {
    const queue = [[x, y]];
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];
    visited[[x, y]] = true;
    let cnt = 1;

    while (queue.length) {
        const node = queue.shift();

        for (let i = 0; i < 4; i++) {
            const nx = node[0] + dx[i];
            const ny = node[1] + dy[i];

            if (nx >= 0 && ny >= 0 && nx < N && ny < N && !visited[[nx, ny]] && map[nx][ny] === 1) {
                visited[[nx, ny]] = true;
                queue.push([nx, ny]);
                cnt++;
            }
        }
    }

    return cnt;
};

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (!visited[[i, j]] && map[i][j] === 1) {
            ans.push(bfs(i, j));
        }
    }
}

ans.sort((a, b) => a - b);
ans.unshift(ans.length);
console.log(ans.join('\n'));
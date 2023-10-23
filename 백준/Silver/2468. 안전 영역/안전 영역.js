const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input.shift();
const map = input.map((arr) => arr.split(' ').map(Number));

const bfs = (x, y, N, graph, visited) => {
    const queue = [[x, y]];
    visited[x][y] = true;
    let cnt = 0;

    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];

    while (queue.length) {
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            cnt++;

            for (let j = 0; j < 4; j++) {
                const nx = node[0] + dx[j];
                const ny = node[1] + dy[j];

                if (
                    nx >= 0 &&
                    ny >= 0 &&
                    nx < N &&
                    ny < N &&
                    !visited[nx][ny] &&
                    graph[nx][ny] > water
                ) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                }
            }
        }
    }

    return cnt;
};

const ans = [];
let water = 0;

while (true) {
    const visited = Array.from(Array(N + 1), () => Array(N + 1).fill(false));
    const arr = [];

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (!visited[i][j] && map[i][j] > water) {
                arr.push(bfs(i, j, N, map, visited));
            }
        }
    }

    if (arr.length === 0) {
        break;
    } else {
        ans.push(arr.length);
    }

    water++;
}

console.log(Math.max(...ans));
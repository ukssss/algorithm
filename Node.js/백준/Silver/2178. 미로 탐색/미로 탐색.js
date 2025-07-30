const [first, ...map] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((arr, index) => {
        if (index === 0) {
            return arr.split(' ').map(Number);
        } else {
            return arr.split('').map(Number);
        }
    });

const [N, M] = first;
const BFS = (x, y) => {
    const queue = [[x, y]];
    const result = [];
    const visited = {};
    visited[[x, y]] = 1;
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];

    while (queue.length) {
        let coord = queue.shift();
        result.push(coord);
        for (let j = 0; j < 4; j++) {
            let nx = coord[0] + dx[j];
            let ny = coord[1] + dy[j];

            if (nx >= 0 && ny >= 0 && nx < N && ny < M && !visited[[nx, ny]] && map[nx][ny] === 1) {
                visited[[nx, ny]] = visited[coord] + 1;
                queue.push([nx, ny]);
            }
        }
    }

    return visited[[N - 1, M - 1]];
};

console.log(BFS(0, 0));
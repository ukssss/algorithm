const [F, S, G, U, D] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(' ')
    .map(Number);
const visited = Array.from(Array(F + 1), () => false);

const bfs = (total, start, finish, up, down) => {
    const queue = [start];
    visited[start] = true;
    let cnt = 0;

    while (queue.length) {
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            if (node === finish) return cnt;

            const move = [node + up, node - down];
            for (let spot of move) {
                if (!visited[spot] && spot >= 1 && spot <= total) {
                    visited[spot] = true;
                    queue.push(spot);
                }
            }
        }

        cnt++;
    }

    return 'use the stairs';
};

console.log(bfs(F, S, G, U, D));
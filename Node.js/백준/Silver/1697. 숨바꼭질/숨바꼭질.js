const [N, X] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const visited = Array.from(Array(100001), () => false);

const bfs = (visited, startNode, FinishNode) => {
    let queue = [startNode];
    visited[startNode] = true;
    let cnt = 0;

    while (queue.length) {
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            if (node === FinishNode) return cnt;

            const move = [node - 1, node + 1, node * 2];
            for (let spot of move) {
                if (!visited[spot] && spot >= 0 && spot <= 100000) {
                    visited[spot] = true;
                    queue.push(spot);
                }
            }
        }

        cnt++;
    }

    return cnt;
};

console.log(bfs(visited, N, X));
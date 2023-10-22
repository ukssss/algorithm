const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input.shift();
const [high, low] = input.shift().split(' ').map(Number);
const m = +input.shift();
const graph = Array.from(Array(n + 1), () => []);
const visited = Array.from(Array(n + 1), () => false);

for (let i = 0; i < m; i++) {
    const [from, to] = input[i].split(' ').map(Number);
    graph[from].push(to);
    graph[to].push(from);
}

const bfs = (high, low, graph, visited) => {
    const queue = [high];
    visited[high] = true;
    let cnt = 0;

    while (queue.length !== 0) {
        let size = queue.length;
        cnt++;

        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            for (let member of graph[node]) {
                if (!visited[member]) {
                    visited[member] = true;

                    if (member === low) {
                        return cnt;
                    }

                    queue.push(member);
                }
            }
        }
    }

    return -1;
};

console.log(bfs(high, low, graph, visited));
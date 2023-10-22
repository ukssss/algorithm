const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input.shift();
const target = input.shift().split(' ').map(Number);
const m = +input.shift();
const graph = Array.from(Array(n + 1), () => []);
const visited = Array.from(Array(n + 1), () => false);

for (let i = 0; i < m; i++) {
    const [from, to] = input[i].split(' ').map(Number);
    graph[from].push(to);
    graph[to].push(from);
}

const bfs = (graph, visited, target) => {
    const [old, young] = target;
    let queue = [young];
    visited[young] = true;
    let cnt = 0;

    while (queue.length !== 0) {
        const size = queue.length;
        cnt++;

        for (let i = 0; i < size; i++) {
            const node = queue.shift();

            for (let member of graph[node]) {
                if (!visited[member]) {
                    if (member === old) {
                        return cnt;
                    }
                    queue.push(member);
                    visited[node] = true;
                }
            }
        }
    }

    return -1;
};

console.log(bfs(graph, visited, target));
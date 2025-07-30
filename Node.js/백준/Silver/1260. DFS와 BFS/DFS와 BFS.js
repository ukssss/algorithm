const [first, ...list] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((v) => v.split(' ').map(Number));

const DFS = (graph, startNode) => {
    const visited = [];
    let needVisit = [];

    needVisit.push(startNode);

    while (needVisit.length !== 0) {
        const node = needVisit.shift();
        if (!visited.includes(node)) {
            visited.push(node);
            needVisit = [...graph[node].sort((a, b) => a - b), ...needVisit];
        }
    }

    return visited;
};

const BFS = (graph, startNode) => {
    const visited = [];
    let needVisit = [];

    needVisit.push(startNode);

    while (needVisit.length !== 0) {
        const node = needVisit.shift();
        if (!visited.includes(node)) {
            visited.push(node);
            needVisit = [...needVisit, ...graph[node].sort((a, b) => a - b)];
        }
    }

    return visited;
};

const [N, M, V] = first;
let graph = [...Array(N + 1)].map((e) => []);

for (let i = 0; i < M; i++) {
    let [from, to] = list[i].map(Number);
    graph[from].push(to);
    graph[to].push(from);
}

const DFS_ANSWER = DFS(graph, V);
const BFS_ANSWER = BFS(graph, V);

console.log(...DFS_ANSWER);
console.log(...BFS_ANSWER);

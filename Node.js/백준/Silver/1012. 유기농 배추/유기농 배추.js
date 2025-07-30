const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = +input.shift();
const drow = [-1, 1, 0, 0];
const dcol = [0, 0, -1, 1];

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    dequeue() {
        if (!this.head) {
            return null;
        }

        const removeNode = this.head;
        this.head = this.head.next;

        if (!this.head) {
            this.tail = null;
        }

        this.size--;
        return removeNode.data;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }
}

for (let i = 0; i < T; i++) {
    const [M, N, K] = input.shift().split(' ').map(Number);
    const cabbage = input.splice(0, K).map((arr) => arr.split(' ').map(Number).reverse());

    const visited = Array.from({ length: N }, () => Array.from({ length: M }, () => false));
    let ans = 0;

    for (let j = 0; j < K; j++) {
        const [row, col] = cabbage[j];
        if (!visited[row][col]) {
            bfs(cabbage, visited, row, col, N, M);
            ans++;
        }
    }

    console.log(ans);
}

function bfs(map, visited, now_row, now_col, max_row, max_col) {
    const queue = new Queue();
    queue.enqueue([now_row, now_col]);
    visited[now_row][now_col] = true;

    while (!queue.isEmpty()) {
        const [row, col] = queue.dequeue();

        for (let i = 0; i < 4; i++) {
            let next_row = row + drow[i];
            let next_col = col + dcol[i];

            if (
                next_row >= 0 &&
                next_col >= 0 &&
                next_row < max_row &&
                next_col < max_col &&
                map.some(
                    ([cabbageRow, cabbageCol]) => cabbageRow === next_row && cabbageCol === next_col
                ) &&
                !visited[next_row][next_col]
            ) {
                queue.enqueue([next_row, next_col]);
                visited[next_row][next_col] = true;
            }
        }
    }
}
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [M, N] = input.shift().split(' ').map(Number);
const tomato = input.map((arr) => arr.split(' ').map(Number));

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor(data) {
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

    dequeue(data) {
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

    size() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }
}

const visited = Array.from({ length: N }, () => Array.from({ length: M }, () => false));
const day = Array.from({ length: N }, () => Array.from({ length: M }, () => 0));
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
const queue = new Queue();
let leftTomato = 0;
let ans = 0;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (tomato[i][j] === 1) {
            visited[i][j] = true;
            queue.enqueue([i, j]);
        }
        if (tomato[i][j] === 0) {
            leftTomato++;
        }
    }
}

if (!leftTomato) {
    console.log(ans);
} else {
    while (queue.size > 0) {
        const [row, col] = queue.dequeue();

        for (let i = 0; i < 4; i++) {
            const nrow = row + dy[i];
            const ncol = col + dx[i];

            if (
                nrow >= 0 &&
                ncol >= 0 &&
                nrow < N &&
                ncol < M &&
                !visited[nrow][ncol] &&
                tomato[nrow][ncol] === 0
            ) {
                visited[nrow][ncol] = true;
                tomato[nrow][ncol] = 1;
                day[nrow][ncol] = day[row][col] + 1;
                leftTomato--;

                if (!leftTomato) {
                    ans = day[nrow][ncol];
                    console.log(ans);
                }

                queue.enqueue([nrow, ncol]);
            }
        }
    }

    if (leftTomato > 0) {
        ans = -1;
        console.log(ans);
    }
}

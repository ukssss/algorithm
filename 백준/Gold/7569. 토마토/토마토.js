const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [M, N, H] = input.shift().split(' ').map(Number);

class Node {
    constructor(data) {
        this.value = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let node = new Node(val);
        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        return ++this.size;
    }

    shift() {
        if (!this.first) return null;
        let node = this.first;
        if (this.first === this.last) this.last = null;
        this.first = this.first.next;
        this.size--;
        return node.value;
    }

    length() {
        return this.size;
    }
}

const direction = [
    [0, 0, 1],
    [0, 0, -1],
    [0, 1, 0],
    [0, -1, 0],
    [1, 0, 0],
    [-1, 0, 0],
];

let tomato = Array.from({ length: H }, () =>
    Array.from({ length: N }, () => Array.from({ length: M }, () => 0))
);

let visited = Array.from({ length: H }, () =>
    Array.from({ length: N }, () => Array.from({ length: M }, () => false))
);

let day = Array.from({ length: H }, () =>
    Array.from({ length: N }, () => Array.from({ length: M }, () => 0))
);

for (let i = 0; i < H; i++) {
    for (let j = 0; j < N; j++) {
        tomato[i][j] = input.shift().split(' ').map(Number);
    }
}

let queue = new Queue();
let leftTomato = 0;

for (let i = 0; i < H; i++) {
    for (let j = 0; j < N; j++) {
        for (let k = 0; k < M; k++) {
            if (tomato[i][j][k] === 1) {
                visited[i][j][k] = true;
                queue.push([i, j, k]);
            }

            if (tomato[i][j][k] === 0) leftTomato++;
        }
    }
}

if (!leftTomato) {
    console.log(0);
} else {
    while (queue.length() > 0) {
        let [height, row, col] = queue.shift();

        for (let j = 0; j < direction.length; j++) {
            let nheight = height + direction[j][0];
            let nrow = row + direction[j][1];
            let ncol = col + direction[j][2];

            if (
                nheight >= 0 &&
                nrow >= 0 &&
                ncol >= 0 &&
                nheight < H &&
                nrow < N &&
                ncol < M &&
                !visited[nheight][nrow][ncol] &&
                tomato[nheight][nrow][ncol] === 0
            ) {
                day[nheight][nrow][ncol] = day[height][row][col] + 1;
                leftTomato--;

                if (!leftTomato) {
                    console.log(day[nheight][nrow][ncol]);
                }

                tomato[nheight][nrow][ncol] = 1;
                visited[nheight][nrow][ncol] = true;
                queue.push([nheight, nrow, ncol]);
            }
        }
    }

    if (leftTomato > 0) {
        console.log(-1);
    }
}
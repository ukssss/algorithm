const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const t = +input.shift();

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

const manhattan = (now_x, now_y, spot_x, spot_y) => {
    return Math.abs(now_x - spot_x) + Math.abs(now_y - spot_y);
};

const solution = (n, songdo) => {
    const [start_x, start_y] = songdo[0];
    const [finish_x, finish_y] = songdo[songdo.length - 1];
    const store_list = songdo.slice(1, songdo.length);

    const queue = new Queue();
    const visited = new Set();

    queue.enqueue([start_x, start_y]);

    while (!queue.isEmpty()) {
        const [now_x, now_y] = queue.dequeue();

        for (let store of store_list) {
            if (!visited.has(store)) {
                const [store_x, store_y] = store;
                const distance = manhattan(now_x, now_y, store_x, store_y);
                if (distance <= 1000) {
                    if (store_x === finish_x && store_y === finish_y) return 'happy';
                    visited.add(store);
                    queue.enqueue(store);
                }
            }
        }
    }

    return 'sad';
};

for (let i = 0; i < t; i++) {
    const n = +input.shift();
    const songdo = [];
    for (let j = 0; j < n + 2; j++) {
        const place = input.shift().split(' ').map(Number);
        songdo.push(place);
    }

    console.log(solution(n, songdo));
}

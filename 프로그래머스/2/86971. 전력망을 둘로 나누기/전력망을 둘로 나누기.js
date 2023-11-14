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

function solution(n, wires) {
    let min = Infinity;

    wires.forEach(([eraseFrom, eraseTo]) => {
        const connect = {};
        for (let i = 1; i <= n; i++) {
            connect[i] = [];
        }

        wires.forEach(([from, to]) => {
            if (!(eraseFrom === from && eraseTo === to)) {
                connect[from].push(to);
                connect[to].push(from);
            }
        });

        const queue = new Queue();
        const visited = new Set();
        queue.enqueue(1);

        while (!queue.isEmpty()) {
            const node = queue.dequeue();
            if (!visited.has(node)) {
                connect[node].forEach((point) => {
                    queue.enqueue(point);
                });
                visited.add(node);
            }
        }

        let first = n - visited.size;
        let second = visited.size;
        min = Math.min(min, Math.abs(first - second));
    });

    return min;
}
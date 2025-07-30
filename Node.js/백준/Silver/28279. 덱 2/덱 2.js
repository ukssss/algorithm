class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class Deque {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    frontPush(num) {
        const node = new Node(num);

        if (!this.size) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }

        this.size++;
    }

    rearPush(num) {
        const node = new Node(num);

        if (!this.size) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }

        this.size++;
    }

    frontPop() {
        if (!this.head) return -1;

        const node = this.head.value;
        this.head = this.head.next;

        if (!this.head) this.tail = null;
        else {
            this.head.prev = null;
        }

        this.size--;
        return node;
    }

    rearPop() {
        if (!this.tail) return -1;

        const node = this.tail.value;
        this.tail = this.tail.prev;

        if (!this.tail) this.head = null;
        else {
            this.tail.next = null;
        }

        this.size--;
        return node;
    }

    length() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    printFront() {
        if (!this.head) return -1;
        return this.head.value;
    }

    printBack() {
        if (!this.tail) return -1;
        return this.tail.value;
    }
}

const [N, ...list] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.split(' ').map(Number));

const deque = new Deque();
const result = [];

list.forEach((e) => {
    switch (e[0]) {
        case 1:
            deque.frontPush(e[1]);
            break;
        case 2:
            deque.rearPush(e[1]);
            break;
        case 3:
            deque.length() > 0 ? result.push(deque.frontPop()) : result.push(-1);
            break;
        case 4:
            deque.length() > 0 ? result.push(deque.rearPop()) : result.push(-1);
            break;
        case 5:
            result.push(deque.length());
            break;
        case 6:
            deque.length() > 0 ? result.push(0) : result.push(1);
            break;
        case 7:
            deque.length() > 0 ? result.push(deque.printFront()) : result.push(-1);
            break;
        case 8:
            deque.length() > 0 ? result.push(deque.printBack()) : result.push(-1);
            break;
    }
});

console.log(result.join('\n'));
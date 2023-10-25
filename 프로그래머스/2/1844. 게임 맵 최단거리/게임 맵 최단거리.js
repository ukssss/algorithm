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

    size() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }
}

function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];
    const queue = new Queue();
    queue.enqueue([0, 0]);
    const visited = Array.from({ length: n }, () => Array.from({ length: m }, () => false));
    visited[0][0] = true;
    let cnt = 0;

    while (queue.size > 0) {
        const size = queue.size;
        cnt++;

        for (let i = 0; i < size; i++) {
            const node = queue.dequeue();

            for (let j = 0; j < 4; j++) {
                const nx = node[0] + dx[j];
                const ny = node[1] + dy[j];

                if (
                    nx >= 0 &&
                    ny >= 0 &&
                    nx < n &&
                    ny < m &&
                    !visited[nx][ny] &&
                    maps[nx][ny] === 1
                ) {
                    if (nx === n - 1 && ny === m - 1) {
                        cnt++;
                        return cnt;
                    }

                    visited[nx][ny] = true;
                    queue.enqueue([nx, ny]);
                }
            }
        }
    }

    return -1;
}
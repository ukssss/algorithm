```jsx
const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
const [n, ...commands] = input;

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(item) {
    const node = new Node(item);

    if (!this.top) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }

    this.size += 1;
  }

  pop() {
    if (this.size > 1) {
      const item = this.top.item;
      const newTop = this.top.next;
      this.top = newTop;
      this.size -= 1;
      return item;
    } else if (this.size === 1) {
      const item = this.top.item;
      this.size -= 1;
      return item;
    } else {
      return -1;
    }
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size ? 0 : 1;
  }

  getTop() {
    return this.top ? this.top.item : -1;
  }
}

function solution(n, commands) {
  let answer = '';
  const stack = new Stack();

  for (let i = 0; i < n; i++) {
    const command = commands[i].split(' ')[0];

    switch (command) {
      case 'push':
        const pushItem = commands[i].split(' ')[1];
        stack.push(pushItem);
        break;

      case 'pop':
        answer += stack.pop() + ' ';
        break;

      case 'size':
        answer += stack.getSize() + ' ';
        break;

      case 'empty':
        answer += stack.isEmpty() + ' ';
        break;

      case 'top':
        answer += stack.getTop() + ' ';
        break;

      default:
        break;
    }
  }

  return answer.split(' ').join('\n');
}

const answer = solution(n, commands);
console.log(answer);
```

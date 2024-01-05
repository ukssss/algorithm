const [N, list] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((element) => element.split(' ').map(Number));

const stack = [];
let top = 0;
let cur = 1;
let output = '';

list.forEach((element) => {
    while (stack[top - 1] === cur) {
        stack.pop();
        top--;
        cur++;
    }

    if (element !== cur) {
        stack.push(element);
        top++;
    } else {
        cur++;
    }
});

while (stack.pop() === cur) {
    top--;
    cur++;
}

top === 0 ? (output = 'Nice') : (output = 'Sad');
console.log(output);
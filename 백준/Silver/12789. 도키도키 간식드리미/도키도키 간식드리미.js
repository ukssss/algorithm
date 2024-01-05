const [N, list] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((element) => element.split(' ').map(Number));

const stack = [];
let top = 0;
let cur = 1;
let result = '';

list.forEach((e) => {
    while (stack[top - 1] === cur) {
        stack.pop();
        top--;
        cur++;
    }

    if (e !== cur) {
        stack.push(e);
        top++;
    } else {
        cur++;
    }
});

while (stack[top - 1] === cur) {
    stack.pop();
    top--;
    cur++;
}

top !== 0 ? (result = 'Sad') : (result = 'Nice');
console.log(result);
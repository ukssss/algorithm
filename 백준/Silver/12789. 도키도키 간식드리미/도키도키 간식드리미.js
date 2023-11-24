const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input[0];
const arr = input[1].split(' ').map(Number);
const stack = [];
let now = 1;
let ans = [];

while (arr.length > 0 && stack.length > 0) {
    if (arr[0] === now) {
        const temp = arr.shift();
        ans.push(temp);
        now++;
    } else {
        if (stack[stack.length - 1] === now) {
            const temp = stack.pop();
            ans.push(temp);
            now++;
        } else {
            const temp = arr.shift();
            stack.push(temp);
        }
    }
}

if (ans.length === N) {
    console.log('Nice');
} else {
    console.log('Sad');
}

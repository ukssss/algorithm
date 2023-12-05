const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

let arr = [];
let temp = '';

for (let i = 0; i < input.length; i++) {
    if (input[i] === '-') {
        arr.push(temp);
        temp = '';
    } else {
        temp += input[i];
    }
}

arr.push(temp);

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i]
        .split('+')
        .map(Number)
        .reduce((acc, cur) => acc + cur, 0);
}

let ans = arr.shift();
arr.forEach((value) => (ans -= value));

console.log(ans);
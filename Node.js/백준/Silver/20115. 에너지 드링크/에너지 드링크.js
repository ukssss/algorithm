const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input[0];
const drink = input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => b - a);

let ans = drink[0];

for (let i = drink.length - 1; i > 0; i--) {
    ans += drink[i] / 2;
}

console.log(ans);
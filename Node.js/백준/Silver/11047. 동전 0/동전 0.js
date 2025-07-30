const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = input.shift().split(' ').map(Number);
const money = input
    .map(Number)
    .filter((price) => price <= K)
    .sort((a, b) => b - a);

let ans = 0;
let remain = K;

for (let i = 0; i < money.length; i++) {
    ans += parseInt(remain / money[i]);
    remain = remain % money[i];

    if (remain === 0) {
        break;
    }
}

console.log(ans);
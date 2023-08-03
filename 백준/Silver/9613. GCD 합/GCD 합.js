const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((v) => v.split(' ').map(Number));

const list = input.splice(1);
const ans = [];

list.forEach((v) => {
    const N = v[0];
    const nums = v.splice(1).sort((a, b) => b - a);
    let sum = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            sum += GCD(nums[i], nums[j]);
        }
    }

    ans.push(sum);
});

function GCD(a, b) {
    if (b === 0) return a;
    return GCD(b, a % b);
}

console.log(ans.join('\n'));
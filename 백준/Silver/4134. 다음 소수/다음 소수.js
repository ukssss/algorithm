const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const list = input.splice(1);
const ans = [];

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

list.forEach((v) => {
    let num = v;
    let status = true;

    while (status) {
        if (isPrime(num)) {
            ans.push(num);
            status = false;
        } else num++;
    }
});

console.log(ans.join('\n'));
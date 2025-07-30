const input = require('fs').readFileSync('/dev/stdin').toString().trim();

function solution(n) {
    n = n.replace(/XXXX/g, 'AAAA');
    n = n.replace(/XX/g, 'BB');

    return n.split('').includes('X') ? -1 : n;
}

const ans = solution(input);
console.log(ans);
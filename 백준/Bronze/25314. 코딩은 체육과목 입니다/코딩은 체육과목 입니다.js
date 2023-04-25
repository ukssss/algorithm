let N = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
console.log('long '.repeat(N / 4) + 'int');
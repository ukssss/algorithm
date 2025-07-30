const [first, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = first.split(' ').map(Number);
const ears = new Set();
const eyes = new Set();

for (let i = 0; i < input.length; i++) {
    i < N ? ears.add(input[i]) : eyes.add(input[i]);
}

const intersect = [...ears].filter((data) => eyes.has(data)).sort();
console.log(intersect.length + '\n' + intersect.join('\n'));
const [a, b, c, d, e, f] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const y = (a * f - c * d) / (a * e - b * d);
const x = (c - b * y) / a || (f - e * y) / d;

console.log(`${x} ${y}`);
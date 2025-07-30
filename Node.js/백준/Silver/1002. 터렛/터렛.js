const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

const T = +input.shift();
const ans = [];

for (let i = 0; i < T; i++) {
    const [x1, y1, r1, x2, y2, r2] = input[i].split(' ').map(Number);

    const p1 = { x: x1, y: y1 };
    const p2 = { x: x2, y: y2 };

    const d = distance(p1, p2);
    ans.push(findPoint(d, r1, r2));
}

function distance(p1, p2) {
    return (p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2;
}

function findPoint(d, r1, r2) {
    const sumR = (r1 + r2) ** 2;
    const diffR = (r1 - r2) ** 2;

    if (d === 0) {
        if (r1 === r2) return -1;
        else return 0;
    } else {
        if (d > diffR && d < sumR) {
            return 2;
        } else if (d === sumR || (d === diffR && d !== 0)) {
            return 1;
        } else if (d < diffR || d > sumR) {
            return 0;
        }
    }
}

console.log(ans.join('\n'));

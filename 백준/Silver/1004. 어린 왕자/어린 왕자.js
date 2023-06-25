const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

const T = Number(input.splice(0, 1));
const ans = [];

for (let i = 0; i < T; i++) {
    const [x1, y1, x2, y2] = input
        .splice(0, 1)
        .toString()
        .split(' ')
        .map(Number);

    let cnt = 0;
    const n = Number(input.splice(0, 1));

    for (let j = 0; j < n; j++) {
        const [cx, cy, r] = input
            .splice(0, 1)
            .toString()
            .split(' ')
            .map(Number);

        const status1 = (x1 - cx) ** 2 + (y1 - cy) ** 2 < r ** 2;
        const status2 = (x2 - cx) ** 2 + (y2 - cy) ** 2 < r ** 2;
        const sameCircle =
            (x1 - cx) ** 2 + (y1 - cy) ** 2 < r ** 2 &&
            (x2 - cx) ** 2 + (y2 - cy) ** 2 < r ** 2;

        if (status1) cnt++;
        if (status2) cnt++;
        if (sameCircle) cnt -= 2;
    }

    ans.push(cnt);
}

console.log(ans.join('\n'));
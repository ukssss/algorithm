const [T, ...input] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

for (let i = 0; i < T; i++) {
    const [, note1] = input.splice(0, 2).map((v) => v.split(' ').map(Number));
    const [, note2] = input.splice(0, 2).map((v) => v.split(' ').map(Number));

    note1.sort((a, b) => a - b);
    const ans = [];

    for (let num of note2) {
        let left = 0;
        let right = note1.length - 1;
        let status = false;

        while (left <= right) {
            let mid = ~~((left + right) / 2);

            if (num === note1[mid]) {
                status = true;
                break;
            } else if (num < note1[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        ans.push(status ? 1 : 0);
    }

    console.log(ans.join('\n'));
}
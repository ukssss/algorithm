const [, ...input] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

for (let num of input) {
    const fibonacci = [
        [1, 0],
        [0, 1],
    ];

    for (let i = 2; i <= num; i++) {
        fibonacci[i] = [
            fibonacci[i - 1][0] + fibonacci[i - 2][0],
            fibonacci[i - 1][1] + fibonacci[i - 2][1],
        ];
    }

    console.log(fibonacci[num].join(' '));
}
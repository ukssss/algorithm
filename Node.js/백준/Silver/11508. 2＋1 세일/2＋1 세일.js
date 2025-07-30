const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let N;
let list = [];

rl.on('line', (line) => {
    if (!N) {
        N = parseInt(line);
    } else {
        list.push(parseInt(line));
    }
});

rl.on('close', () => {
    list.sort((a, b) => b - a);
    let cnt = 0;

    for (let i = 0; i < N; i += 3) {
        const buy = list.slice(i, i + 3);

        if (buy.length === 1) {
            cnt += buy[0];
        } else {
            cnt += buy[0] + buy[1];
        }
    }

    console.log(cnt);
});
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const list = input[1].split('');

let cnt = 0;
let start = '';
let now = '';

for (let i = 0; i < list.length; i++) {
    if (i === 0) {
        start = list[i];
        now = list[i];
        cnt++;
    } else {
        if (start !== list[i]) {
            if (now !== list[i]) {
                now = list[i];
                cnt++;
            }
        } else {
            if (now !== list[i]) {
                now = list[i];
            }
        }
    }
}

console.log(cnt);
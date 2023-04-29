const list = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let wordLen = list.map((el) => el.length);
let maxLen = Math.max(...wordLen);
let result = '';

for (let i = 0; i < maxLen; i++) {
  for (let j = 0; j < list.length; j++) {
    if (list[j][i] === undefined) continue;
    else result += list[j][i];
  }
}

console.log(result);
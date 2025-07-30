const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const card = input.slice(1, 2).toString().split(' ').map(Number);

let sumArr = [];

for (let i = 0; i < N; i++) {
  let sum = card[i];
  for (let j = i + 1; j < N; j++) {
    sum += card[j];
    for (let k = j + 1; k < N; k++) {
      sum += card[k];
      sum <= M && sumArr.push(sum);
      sum -= card[k];
    }
    sum -= card[j];
  }
}

let ans = sumArr[0];
let temp = Math.abs(M - sumArr[0]);

for (let i = 1; i < sumArr.length; i++) {
  if (temp > Math.abs(M - sumArr[i])) {
    ans = sumArr[i];
    temp = Math.abs(M - sumArr[i]);
  }
}

console.log(ans);
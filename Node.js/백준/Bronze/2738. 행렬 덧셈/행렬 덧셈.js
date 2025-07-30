const list = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = list.shift().split(' ').map(Number);

for (let i = 0; i < N; i++) {
  let first = list[i].split(' ').map(Number);
  let second = list[i + N].split(' ').map(Number);
  let arr = [];

  for (let j = 0; j < M; j++) {
    arr.push(first[j] + second[j]);
  }

  console.log(arr.join(' '));
}
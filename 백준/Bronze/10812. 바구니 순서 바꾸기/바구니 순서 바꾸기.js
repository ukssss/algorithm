const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = n.split(' ');
let basket = Array.from({ length: N }, (value, i) => i + 1);

for (let a = 0; a < M; a++) {
  let [i, j, k] = arr[a].split(' ');
  let temp = [];
  for (let b = k - 1; b < j; b++) {
    temp.push(basket[b]);
  }
  for (let b = i - 1; b < k - 1; b++) {
    temp.push(basket[b]);
  }
  basket.splice(i - 1, j - i + 1, ...temp);
}

console.log(basket.join(' '));
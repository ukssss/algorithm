const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = n.toString().trim().split(' ').map(Number);
let basket = Array.from({ length: N }, (value, i) => (value = i + 1));

for (let a = 0; a < M; a++) {
  let [i, j] = arr[a].split(' ').map(Number);
  let temp = [];
  for (let b = i - 1; b < j; b++) {
    temp.push(basket[b]);
  }
  temp.reverse();
  basket.splice(i - 1, j - i + 1, ...temp);
}

console.log(basket.join(' '));
const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = n.split(' ').map(Number);
const basket = Array.from({ length: N }, (value, i) => (value = i + 1));

for (let k = 0; k < M; k++) {
  let [i, j] = arr[k].split(' ').map(Number);
  let first = basket[i - 1];
  let second = basket[j - 1];
  basket[i - 1] = second;
  basket[j - 1] = first;
}

console.log(basket.join(' '));
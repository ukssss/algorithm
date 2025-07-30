const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = n.split(' ').map(Number);
const basket = Array.from({ length: N }, () => 0);

for (let i = 0; i < M; i++) {
  let input = arr[i].split(' ').map(Number);
  for (let j = input[0] - 1; j < input[1]; j++) {
    basket[j] = input[input.length - 1];
  }
}

console.log(basket.join(' '));
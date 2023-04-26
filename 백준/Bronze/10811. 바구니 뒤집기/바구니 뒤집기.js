const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = n.split(' ').map(Number);
const basket = Array.from({ length: N }, (value, i) => (value = i + 1));

for (let k = 0; k < M; k++) {
  let [i, j] = arr[k].split(' ').map(Number);
  let cnt = 1;

  for (let e = i - cnt; e <= j - cnt; e++) {
    let temp1 = basket[j - cnt];
    let temp2 = basket[e];
    basket[j - cnt] = temp2;
    basket[e] = temp1;
    cnt++;
  }
}

console.log(basket.join(' '));
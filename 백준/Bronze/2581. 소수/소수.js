const [M, N] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let sosu = [];

const sosuCheck = (n) => {
  if (n === 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

for (let i = M; i <= N; i++) {
  sosuCheck(i) && sosu.push(i);
}

let sumResult = 0;

for (let i = 0; i < sosu.length; i++) {
  sumResult += sosu[i];
}

console.log(sosu.length ? `${sumResult}\n${sosu[0]}` : -1);
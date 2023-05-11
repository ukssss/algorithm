let N = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

const chess = new Array(N + 1);
let answer = 0;

const isValid = (col) => {
  for (let i = 1; i <= col - 1; i++) {
    if (chess[col] === chess[i] || col - i === Math.abs(chess[col] - chess[i])) {
      return false;
    }
  }
  return true;
};

const setQueen = (col) => {
  if (col > N) {
    answer++;
    return;
  }

  for (let row = 1; row <= N; row++) {
    chess[col] = row;

    if (isValid(col)) setQueen(col + 1);
  }
};

setQueen(1);

console.log(answer);
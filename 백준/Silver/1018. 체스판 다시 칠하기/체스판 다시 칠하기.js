const [n, ...board] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = n.split(' ').map(Number);
const whiteBoard = ['WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW'];
const blackBoard = ['BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB'];

let changePoint = [];

function whiteBoardType(x, y) {
  let cnt = 0;
  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      if (board[i][j] !== whiteBoard[i - y][j - x]) {
        cnt++;
      }
    }
  }
  return cnt;
}

function blackBoardType(x, y) {
  let cnt = 0;
  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      if (board[i][j] !== blackBoard[i - y][j - x]) {
        cnt++;
      }
    }
  }
  return cnt;
}

for (let i = 0; i + 7 < N; i++) {
  for (let j = 0; j + 7 < M; j++) {
    changePoint.push(whiteBoardType(j, i));
    changePoint.push(blackBoardType(j, i));
  }
}

console.log(Math.min(...changePoint));
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const test = input.shift();

for (let i = 0; i < test; i++) {
  const k = input.shift();
  const n = input.shift();

  const room = Array.from(Array(k + 1), () => Array(n + 1).fill(0));
  // 길이 k + 1 배열 생성에 내용이 모두 0이면서 길이가 n + 1 로 된 배열을 삽입

  // 0 층 계산
  for (let j = 1; j <= n; j++) {
    room[0][j] = j;
  }

  // 1 층 ~ k 층 계산
  for (let f = 1; f <= k; f++) {
    for (let h = 1; h <= n; h++) {
      room[f][h] = room[f - 1][h] + room[f][h - 1];
    }
  }

  console.log(room[k][n]);
}
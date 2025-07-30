const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const t = input.shift();

for (let i = 0; i < t; i++) {
  const k = input.shift();
  const n = input.shift();

  // 길이가 k + 1 인 배열을 생성 후, 배열안에 0 으로 꽉채운 길이가 n + 1 인 배열 생성
  const apt = Array.from(Array(k + 1), () => Array(n + 1).fill(0));

  // 0 층
  for (let j = 1; j <= n; j++) {
    apt[0][j] = j;
  }

  // 1 층 ~ k 층
  for (let f = 1; f <= k; f++) {
    for (let j = 1; j <= n; j++) {
      // f 층 j 호 입주민의 수는 f - 1 층의 j 호의 입주민 수에 f 층의 j - 1 호 입주민 수를 더한 것과 같다.
      apt[f][j] = apt[f - 1][j] + apt[f][j - 1];
    }
  }

  // k 층 n 호에 사는 입주민의 수 출력
  console.log(apt[k][n]);
}
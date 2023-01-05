const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("");

// 다이얼 별 시간초를 객체로 나타냄
const dial = {
  3: "ABC",
  4: "DEF",
  5: "GHI",
  6: "JKL",
  7: "MNO",
  8: "PQRS",
  9: "TUV",
  10: "WXYZ",
};

let time = 0;

for (let i = 0; i < input.length; i++) {
    // 입력값 한 글자 씩 출력
  for (let j = 3; j <= 10; j++) {
      // 다이얼 문자열에 입력값 글자의 포함여부 조회, 포함하면 time 에 시간초 더하기
    if (dial[j].includes(input[i])) {
      time += j;
    }
  }
}

console.log(time);
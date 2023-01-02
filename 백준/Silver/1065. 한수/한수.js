const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let num = Number(input);

function hansu(n) {
  const arr = new Array(n + 1).fill(true); // * 0 번 인덱스 생략
  for (let i = 1; i < n + 1; i++) {
    // * 1 ~ 1000
    const numList = String(i).split(""); // * 숫자 문자열로 분리 e.g. 11 => 1, 1
    if (numList.length < 3) {
      // * 100 이하 수는 모두 등차수열이기에 패스
      continue;
    } else {
      // * 100 이상인 수부터 계산
      const sub = numList[1] - numList[0]; // * 10의 자리 - 1의 자리 (공차 기준 생성)
      for (let j = 1; j < numList.length - 1; j++) {
        // *  10의 자리 부터 시작
        if (sub !== numList[j + 1] - numList[j]) {
          // * 공차랑 다른 값일 경우 => 한수 X
          arr[i] = false; // * 배열의 해당값의 위치를 false
          break; // * 끝
        }
      }
    }
  }
  return arr.filter((x) => x).length - 1;
  // * filter 를 통해 true 인 것만 고른 후 배열의 길이를 출력, 0 제외를 위해 -1
}

console.log(hansu(num));

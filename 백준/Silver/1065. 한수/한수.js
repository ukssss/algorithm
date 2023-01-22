const input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

let test = new Array(input + 1).fill(true);

// 1 번 부터 입력값까지 검사하는 반복문 생성
for (let i = 1; i < input + 1; i++) {
  // 문자열 분리
  let arr = String(i).split("");

  // 3 자리 이하의 수는 모두 한수이기에 계산 생략
  if (arr.length < 3) continue;
  else {
    // 연속된 두 개의 수의 차이가 일정한 지 검사, 아닐 경우 false 값 적용
    arr[0] - arr[1] === arr[1] - arr[2] ? "" : (test[i] = false);
  }
}

// test 배열에서 값이 true 인 것만 hansu 라는 새로운 배열에 추가
let hansu = test.filter((num) => num === true);

// 0 번 인덱스는 생략해야 하기에 hansu 배열의 길이에 1 을 빼기
console.log(hansu.length - 1);

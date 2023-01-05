// 문자열 입력, 소문자로 변환
const input = require("fs").readFileSync("/dev/stdin").toString().trim().toLowerCase();

// 26칸의 0으로 채운 배열 생성
const result = new Array(26).fill(0);

// 입력값의 길이만큼 반복, 존재하는 알파벳(아스키) - 97 한 값의 배열에 후증가 실시
for (let i = 0; i < input.length; i++) {
  result[input.charCodeAt(i) - 97]++;
}

// spread 로 복사 후 배열의 값들 중 최대값 추출
const max = Math.max(...result);
// 배열에서 최대값의 index 값 추출, 없을 경우 -1
const index = result.indexOf(max);

// 최대값이 여러 개 인 경우를 대비해 isSame 변수 생성
let isSame = false;

// 0 ~ 26 (A ~ Z), 배열의 값이 최대값과 동일하며, 기존 index 값과 다른 j 가 나타나면
// 최대값이 여러 개라는 의미로 isSame = true 설정 후 반복문 종료
for (let j = 0; j < 26; j++) {
  if (result[j] === max && index !== j) {
    isSame = true;
    break;
  }
}

// 최대값이 여러 개일 경우 ? 출력, 그렇지 않으면 index + 65 를 하여 문자열로 변환한 값 출력
console.log(isSame ? "?" : String.fromCharCode(index + 65));
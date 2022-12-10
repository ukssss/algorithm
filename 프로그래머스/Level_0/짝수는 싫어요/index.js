// 짝수는 싫어요
// 문제 설명
// 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 100

// 풀이 1
function solution(n) {
  // 배열 생성
  let array = [];
  // 1 부터 n 까지 오름차순
  for (let i = 1; i <= n; i++) {
    // 2로 나눴을 때 나머지가 0 이 안나옴 => 홀수
    if (i % 2 !== 0) {
      array.push(i);
    }
  }
  return array;
}

// 풀이 2
function solution2(n) {
  let answer = [];
  for (let i = 1; i <= n; i += 2) {
    answer.push(i);
  }
  return answer;
}

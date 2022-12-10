// 문제 설명
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// -10,000 ≤ numbers의 원소 ≤ 10,000
// 1 ≤ numbers의 길이 ≤ 1,000

// 풀이 1
function solution(numbers) {
  // 배열 생성
  let answer = [];
  // numbers[0] 부터 끝까지 answer 배열에 Push
  for (i = 0; i <= numbers.length - 1; i++) {
    answer.push(numbers[i] * 2);
  }
  return answer;
}

// 풀이 2
function solution2(numbers) {
  let answer = numbers.map((x) => x * 2);
  return answer;
}

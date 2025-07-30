// 문제 설명
// 정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ num_list의 길이 ≤ 1,000
// 0 ≤ num_list의 원소 ≤ 1,000

// 풀이 1
function solution(num_list) {
  let reverse = [];
  for (let i = num_list.length - 1; i > -1; i--) {
    reverse.push(num_list[i]);
  }
  return reverse;
}

// 풀이 2
function solution2(num_list) {
  return num_list.reverse();
}

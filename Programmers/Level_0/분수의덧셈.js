// 문제 설명
// 첫 번째 분수의 분자와 분모를 뜻하는 denum1, num1, 두 번째 분수의 분자와 분모를 뜻하는 denum2, num2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 0 < denum1, num1, denum2, num2 < 1,000

function solution(denum1, num1, denum2, num2) {
  // 최대 공약수
  let maximum = 0;
  // 분자 값 합
  let topNum = num1 * denum2 + num2 * denum1;
  // 공통 분모
  let botNum = num1 * num2;

  // 최대 공약수 계산
  for (let i = 1; i <= topNum; i++) {
    // 분자 값 합 나머지도 0, 공통 분모 나머지도 0일 경우 최대 공약수 값이다.
    if (topNum % i === 0 && botNum % i === 0) {
      maximum = i;
    }
  }
  let answer = [topNum / maximum, botNum / maximum];
  return answer;
}

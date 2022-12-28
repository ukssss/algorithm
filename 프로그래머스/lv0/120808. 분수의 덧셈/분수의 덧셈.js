function solution(denum1, num1, denum2, num2) {
  let maximum = 0;
  let topNum = num1 * denum2 + num2 * denum1;
  let botNum = num1 * num2;

  for (let i = 1; i <= botNum; i++) {
    if (topNum % i === 0 && botNum % i === 0) {
      maximum = i;
    }
  }
  let answer = [topNum / maximum, botNum / maximum];
  return answer;
}
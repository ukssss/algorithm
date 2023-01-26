let input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

let cnt = 0;

while (true) {
  // input이 5보다 크거나, 5로 정확하게 나눠질 경우
  if (input % 5 === 0) {
    cnt += parseInt(input / 5); // 나눈 몫을 cnt 추가
    console.log(cnt);
    break;
  }

  // input이 0이하일 경우 정확하게 킬로그램을 만들수 없기에 -1 출력
  if (input < 0) {
    console.log(-1);
    break;
  }

  // input 에서 3을 계속 빼주면서 조건을 비교, cnt 1 추가
  cnt++;
  input -= 3;
}
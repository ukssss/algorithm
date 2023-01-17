function solution(array) {
  const ascArray = array.sort((a, b) => a - b);
  let before = -1;
  let mode = -1;
  let cnt = 0;
  let repeatCnt = 0;
  let isDup = false;

  for (let i = 0; i < array.length; i++) {
    // 중복된 값의 개수 측정
    if (before !== array[i]) {
      cnt = 1;
    } else {
      cnt += 1;
    }
    // 최빈값이 여러개일 경우 -1 출력
    if (cnt === repeatCnt) {
      if (mode !== array[i]) {
        isDup = true;
      }
    }
    // 기존 최빈값보다 더 큰 최빈값이 나타날 경우
    if (cnt > repeatCnt) {
      repeatCnt = cnt;
      mode = array[i];
      isDup = false;
    }
    // 기존 값을 이전 값으로 대치
    before = array[i];
  }

  // 최빈값이 여러개일 경우, 아닐 경우
  if (isDup) {
    return -1;
  } else {
    return mode;
  }
}
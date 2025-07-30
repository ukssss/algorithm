function solution(array) {
  // 1,2,3,3,3,4
  const arr = array.sort((a, b) => a - b); // 오름차순 정렬
  let before = -1; // 시작값 1
  let cnt = 0; // 빈도수 0
  let maxCnt = 0; // 최대 빈도수 0
  let max = -1; // 최빈값 0
  let isDup = false;

  for (let i = 0; i < arr.length; i++) {
    // 1, 1, 2, 2
    before !== arr[i] ? (cnt = 1) : (cnt += 1);

    if (cnt === maxCnt) {
      if (max !== arr[i]) {
        isDup = true;
      }
    }

    if (cnt > maxCnt) {
      max = array[i];
      maxCnt = cnt;
      isDup = false;
    }

    before = arr[i];
  }

  return isDup ? -1 : max;
}
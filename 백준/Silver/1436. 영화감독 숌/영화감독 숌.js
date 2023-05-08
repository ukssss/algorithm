let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

let titleNum = 665;
let ans = 0;

while (input > 0) {
  titleNum++;
  if (titleNum.toString().includes('666')) {
    ans = titleNum;
    input--;
  }
}

console.log(ans);
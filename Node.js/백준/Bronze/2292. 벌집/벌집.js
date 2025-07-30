const input = parseInt(require("fs").readFileSync("/dev/stdin").toString().trim());

let max = 1;
let cnt = 1;

// ! 규칙 1, 7, 19, 37, 61...

while (true) {
  if (max >= input) {
    console.log(cnt);
    break;
  }
  max += 6 * cnt;
  cnt++;
}
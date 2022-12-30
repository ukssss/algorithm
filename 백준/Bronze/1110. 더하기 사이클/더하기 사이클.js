const input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

let num = input;
let sum = 0;
let cnt = 0;

while (true) {
  sum = Math.floor(num / 10) + (num % 10);
  num = (num % 10) * 10 + (sum % 10);
  cnt++;

  if (input === num) {
    break;
  }
}

console.log(cnt);
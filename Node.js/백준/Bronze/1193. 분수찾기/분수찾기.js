let input = parseInt(require("fs").readFileSync("/dev/stdin").toString().trim());

let i = 1;

while (input) {
  if (input <= i) {
    // * i = 배열 번호, input = 배열 좌표 (e.g. 8 => i = 4, input = 2)
    i % 2 === 0 ? console.log(`${input}/${i - input + 1}`) : console.log(`${i - input + 1}/${input}`);
    break;
  } else {
    input -= i;
    i++;
  }
}
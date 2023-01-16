let input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

let i = 2;

while (input !== 1) {
  if (input % i === 0) {
    input = input / i;
    console.log(i);
  } else {
    i++;
  }
}
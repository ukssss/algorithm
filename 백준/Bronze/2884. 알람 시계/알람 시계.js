let [h, m] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

let setM = m - 45;

if (setM < 0) {
  h -= 1;
  m = 60 + setM;
  if (h < 0) {
    h = 23;
  }
} else {
  m -= 45;
}

console.log(h, m);
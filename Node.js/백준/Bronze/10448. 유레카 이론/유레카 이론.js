let list = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let arr = [];

for (let i = 1; i <= 45; i++) {
  arr.push((i * (i + 1)) / 2);
}

for (let i = 1; i <= list[0]; i++) {
  let status = false;
  for (one of arr) {
    for (two of arr) {
      for (three of arr) {
        if (list[i] === one + two + three) {
          status = true;
        }
      }
    }
  }
  console.log(status ? 1 : 0);
}
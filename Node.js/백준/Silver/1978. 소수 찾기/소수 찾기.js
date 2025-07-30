const [n, list] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = list.split(" ").map(Number);
let test = new Array(Number(n)).fill(true);

for (let i = 0; i < Number(n); i++) {
  if (arr[i] === 1) {
    test[i] = false;
  }

  for (let j = 2; j < arr[i]; j++) {
    if (arr[i] % j === 0) {
      test[i] = false;
    }
  }
}

let sosu = test.filter((num) => num === true);

console.log(sosu.length);
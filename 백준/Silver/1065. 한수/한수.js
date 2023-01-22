const input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

let test = new Array(input + 1).fill(true);

for (let i = 1; i < input + 1; i++) {
  let arr = String(i).split("");

  if (arr.length < 3) continue;
  else {
    arr[0] - arr[1] === arr[1] - arr[2] ? "" : (test[i] = false);
  }
}

let hansu = test.filter((num) => num === true);

console.log(hansu.length - 1);
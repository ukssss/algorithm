const input = require("fs").readFileSync("dev/stdin").toString().trim().split(" ");

const arr = input.map(Number);
const first = (arr[0] + arr[1]) % arr[2];
const second = ((arr[0] % arr[2]) + (arr[1] % arr[2])) % arr[2];
const third = (arr[0] * arr[1]) % arr[2];
const fourth = ((arr[0] % arr[2]) * (arr[1] % arr[2])) % arr[2];
console.log(first + "\n" + second + "\n" + third + "\n" + fourth);
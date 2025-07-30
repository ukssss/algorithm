const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const totalPrice = Number(input[0]);
const types = Number(input[1]);
let addPrice = 0;

for (let i = 2; i < 2 + types; i++) {
  let productInfo = input[i].split(" ");
  addPrice += Number(productInfo[0]) * Number(productInfo[1]);
}

console.log(addPrice == totalPrice ? "Yes" : "No");
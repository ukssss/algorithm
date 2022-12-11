const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input.map(Number);
const a = input[0];
const b = input[1].split("");
const one = a * b[2];
const ten = a * b[1];
const hun = a * b[0];
const result = one + ten * 10 + hun * 100;
console.log(one + "\n" + ten + "\n" + hun + "\n" + result);
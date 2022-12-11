// 실습 기본 환경 세팅 코드
// 한 줄에 하나씩 값이 들어올 때
// let input = require("fs").readFileSync("example.txt").toString().split('\n');

// 한 줄에 공백으로 값이 들어올 때
let input = require("fs").readFileSync("example.txt").toString().split(" ");

// 제출용 코드
//let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
let a = parseInt(input[0]);
let b = parseInt(input[1]);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);

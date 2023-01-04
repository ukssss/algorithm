const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("");

let alpha = [];

for (let i = 97; i <= 122; i++) {
  alpha.push(input.indexOf(String.fromCharCode(i)));
}

console.log(alpha.join(" "));
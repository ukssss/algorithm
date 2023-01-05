const [a, b] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

const aArr = a.split("");
const bArr = b.split("");

let aNew = "";
let bNew = "";

for (let i = aArr.length - 1; i >= 0; i--) {
  aNew += aArr[i];
  bNew += bArr[i];
}

console.log(Number(aNew) > Number(bNew) ? Number(aNew) : Number(bNew));
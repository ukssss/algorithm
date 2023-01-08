let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let test = input[0];

const croatian = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let alphabet of croatian) {
  test = test.split(alphabet).join("a");
}

console.log(test.length);
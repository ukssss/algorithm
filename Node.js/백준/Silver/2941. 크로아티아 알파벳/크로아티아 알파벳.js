let input = require("fs").readFileSync("/dev/stdin").toString().trim();

const croatian = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let alphabet of croatian) {
  input = input.split(alphabet).join("a");
}

console.log(input.length);
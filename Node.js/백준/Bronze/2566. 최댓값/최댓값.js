const row = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let max = 0;
let rowNum = 0;
let colNum = 0;

for (let i = 0; i < row.length; i++) {
  const column = row[i].split(" ").map(Number);
  if (max <= Math.max.apply(null, column)) {
    max = Math.max.apply(null, column);
    rowNum = i + 1;
    colNum = column.indexOf(max) + 1;
  }
}
console.log(max);
console.log(`${rowNum} ${colNum}`);
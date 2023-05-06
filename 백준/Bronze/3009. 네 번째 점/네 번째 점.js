const list = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let xArr = [];
let yArr = [];
let x = 0;
let y = 0;

for (let i = 0; i < list.length; i++) {
  let [x, y] = list[i].split(' ').map(Number);
  xArr.push(x);
  yArr.push(y);
}

xArr.sort((a, b) => a - b);
yArr.sort((a, b) => a - b);

x = xArr[0] === xArr[1] ? xArr[2] : xArr[0];
y = yArr[0] === yArr[1] ? yArr[2] : yArr[0];

console.log(x, y);
const list = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}
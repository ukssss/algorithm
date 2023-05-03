const list = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < list.length - 1; i++) {
  let [first, second] = list[i].split(' ').map(Number);

  if (second % first === 0) {
    console.log('factor');
  } else if (first % second === 0) {
    console.log('multiple');
  } else {
    console.log('neither');
  }
}
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const cnt = +input.splice(0, 1).toString();
const queue = [];
let str = [];

for (let i = 0; i < cnt; i++) {
  const [com, num] = input[i].toString().trim().split(' ');

  if (com === 'push') {
    queue.push(+num);
  } else if (com === 'pop') {
    str.push(queue.length ? queue.shift() : -1);
  } else if (com === 'size') {
    str.push(queue.length);
  } else if (com === 'empty') {
    str.push(queue.length ? 0 : 1);
  } else if (com === 'front') {
    str.push(queue[0] ? queue[0] : -1);
  } else if (com === 'back') {
    str.push(queue[queue.length - 1] ? queue[queue.length - 1] : -1);
  } else return;
}

console.log(str.join('\n'));
let list = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let stop = null;

for (let i = 0; i < list.length - 1; i++) {
  for (let j = i + 1; j < list.length; j++) {
    const total = list.reduce((acc, cur) => (acc += cur), 0);

    if (total - list[i] - list[j] === 100) {
      stop = list.filter((el) => el !== list[i] && el !== list[j]);
      break;
    }
  }
  if (stop) {
    break;
  }
}

console.log(stop.sort((a, b) => a - b).join('\n'));
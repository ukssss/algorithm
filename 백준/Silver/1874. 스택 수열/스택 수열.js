const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const [n, ...sequence] = input;

function solution(testCase, list) {
  const stack = [];
  let command = [];
  let num = 1;

  for (let i = 0; i < testCase; i++) {
    while (num <= list[i]) {
      stack.push(num);
      command.push('+');
      num++;
    }

    const popItem = stack.pop();
    command.push('-');

    if (popItem !== list[i]) {
      command = ['NO'];
      break;
    }
  }

  return command.join('\n');
}

const answer = solution(n, sequence);
console.log(answer);
let word = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

let first = [];
let second = [];

if (word.length % 2 === 0) {
  for (let i = 0; i < word.length / 2; i++) {
    first.push(word[i]);
  }
  for (let i = word.length - 1; i > word.length / 2 - 1; i--) {
    second.push(word[i]);
  }
} else {
  for (let i = 0; i < (word.length - 1) / 2; i++) {
    first.push(word[i]);
  }
  for (let i = word.length - 1; i > (word.length - 1) / 2; i--) {
    second.push(word[i]);
  }
}

{
  JSON.stringify(first) === JSON.stringify(second) ? console.log(1) : console.log(0);
}


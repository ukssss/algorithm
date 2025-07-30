const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < n; i++) {
  let word = arr[i];
  console.log(`${word[0] + word[word.length - 1]}`);
}
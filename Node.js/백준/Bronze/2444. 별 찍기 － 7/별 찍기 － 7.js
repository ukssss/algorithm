let n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

for (let i = 0; i < n; i++) {
  let arr = [];
  for (let j = n - 1; j > i; j--) {
    arr.push(' ');
  }
  for (let j = 0; j <= i; j++) {
    arr.push('*');
  }
  for (let j = 1; j <= i; j++) {
    arr.push('*');
  }
  console.log(arr.join(''));
}

for (let i = 0; i < n - 1; i++) {
  let arr = [];
  for (let j = 0; j <= i; j++) {
    arr.push(' ');
  }
  for (let j = n - 1; j > i; j--) {
    arr.push('*');
  }
  for (let j = n - 2; j > i; j--) {
    arr.push('*');
  }
  console.log(arr.join(''));
}
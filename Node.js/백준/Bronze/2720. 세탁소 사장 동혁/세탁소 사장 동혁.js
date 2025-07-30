const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);

for (let i = 0; i < n; i++) {
  let quarter = 0;
  let dime = 0;
  let nickel = 0;
  let penny = 0;
  let cnt = [];

  while (arr[i]) {
    quarter = Math.floor(arr[i] / 25);
    arr[i] = arr[i] % 25;
    cnt.push(quarter);
    dime = Math.floor(arr[i] / 10);
    arr[i] = arr[i] % 10;
    cnt.push(dime);
    nickel = Math.floor(arr[i] / 5);
    arr[i] = arr[i] % 5;
    cnt.push(nickel);
    penny = Math.floor(arr[i] / 1);
    arr[i] = arr[i] % 1;
    cnt.push(penny);
  }

  console.log(cnt.join(' '));
}
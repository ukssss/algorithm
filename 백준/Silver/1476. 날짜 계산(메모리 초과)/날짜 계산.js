const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  const [E, S, M] = line.split(' ').map(Number);
  let cnt = 1;

  while (true) {
    if ((cnt - E) % 15 === 0 && (cnt - S) % 28 === 0 && (cnt - M) % 19 === 0) {
      console.log(cnt);
      process.exit();
    }
    cnt++;
  }
});

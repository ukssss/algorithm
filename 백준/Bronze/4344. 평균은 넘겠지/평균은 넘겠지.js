const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const num = Number(input[0]);

for (let i = 0; i < num; i++) {
  const test = input[i + 1].split(" ").map((x) => Number(x));
  const cnt = test.shift();
  const result = test.reduce((total, currentValue) => (total += currentValue), 0);
  const avg = result / cnt;
  let pass = 0;

  for (let j = 0; j < test.length; j++) {
    test[j] > avg ? pass++ : "";
  }

  const ans = ((pass / cnt) * 100).toFixed(3);
  console.log(`${ans}%`);
}
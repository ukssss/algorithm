const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const test = Number(input.shift());
for (let i = 0; i < test; i++) {
  // h : 호텔의 층 수, w : 각 층의 방 수, n : 몇 번째 손님
  let [h, w, n] = input[i].split(" ").map(Number);
  let floor = 0;
  let num = 0;

  if (n % h === 0) {
    floor = h;
  } else {
    floor = n % h;
  }
  num = Math.ceil(n / h);

  floor = String(floor);
  num = String(num).padStart(2, "0");
  console.log(`${floor}${num}`);
}
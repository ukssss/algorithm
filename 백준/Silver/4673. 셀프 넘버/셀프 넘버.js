function notSelfNumber(n) {
  let sum = n; // * ex) 123

  while (true) {
    if (n === 0) break; // * n = 0 break
    sum += n % 10; // * 1(3), 2(2), 3(1)
    n = parseInt(n / 10); // * 1(12), 2(1), 3(0)
  }

  return sum; // * 123 + 3 + 2 + 1 = 129
}

function selfNumber(n) {
  let notSelf = []; // * notSelf
  let self = []; // * Self

  for (let i = 1; i < n + 1; i++) {
    let index = notSelfNumber(i);

    if (index < n + 1) {
      notSelf[index] = true;
    }
  }

  for (let i = 1; i < n + 1; i++) {
    if (!notSelf[i]) self.push(i);
  }
  console.log(self.join("\n"));
}

selfNumber(10000);
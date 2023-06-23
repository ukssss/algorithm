const [T, ...testCase] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

for (let item of testCase) {
    const arr = Array(item + 1)
        .fill(true)
        .fill(false, 0, 2);
    const res = [];

    for (let i = 2; i <= Math.ceil(Math.sqrt(item)); i++) {
        let j = 2;

        while (i * j <= item) {
            arr[i * j] = false;
            j++;
        }
    }

    let left = 1;
    let right = item - 1;
    let ans = 0;

    while (left <= right) {
        let mid = left + right;

        if (arr[left] && arr[right]) {
            ans = { left: left, right: right };
        }

        left++;
        right--;
    }

    console.log(ans.left, ans.right);
}
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input[0];
const arr = input[1].split(' ').map(Number);
const res = [arr[0]];

const binarySearch = (i) => {
    let left = 0;
    let right = res.length - 1;

    while (left < right) {
        const mid = parseInt((left + right) / 2);
        if (res[mid] < arr[i]) {
            left = mid + 1;
        } else if (res[mid] > arr[i]) {
            right = mid;
        } else {
            return mid;
        }
    }

    return right;
};

const solution = () => {
    for (let i = 1; i < n; i++) {
        if (res[res.length - 1] < arr[i]) {
            res.push(arr[i]);
            continue;
        }

        const idx = binarySearch(i);
        res[idx] = arr[i];
    }

    return res.length;
};

const ans = solution();
console.log(ans);
const input = +require('fs').readFileSync('/dev/stdin').toString().trim();

let low = BigInt(0);
let high = BigInt(input);

while (low <= high) {
    let mid = ~~((low + high) / BigInt(2));

    if (mid ** BigInt(2) < input) {
        low = mid + BigInt(1);
    } else {
        high = mid - BigInt(1);
    }
}

console.log(String(low));
function solution(arrayA, arrayB) {
    arrayA.sort((a, b) => a - b);
    arrayB.sort((a, b) => a - b);
    const checkA = find(arrayA, arrayB);
    const checkB = find(arrayB, arrayA);
    return Math.max(checkA, checkB);
}

function find(curr, target) {
    for (let i = curr[0]; i > 1; i--) {
        if (curr.every((v) => v % i === 0) && target.every((v) => v % i !== 0)) return i;
    }
    return 0;
}
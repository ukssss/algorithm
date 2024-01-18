function solution(arr1, arr2) {
    const result = [];
    for (let arr1RowIdx = 0; arr1RowIdx < arr1.length; arr1RowIdx++) {
        const arr = [];
        for (let arr2ColIdx = 0; arr2ColIdx < arr2[0].length; arr2ColIdx++) {
            let sum = 0;
            for (let arr1ColIdx = 0; arr1ColIdx < arr1[arr1RowIdx].length; arr1ColIdx++) {
                sum += arr1[arr1RowIdx][arr1ColIdx] * arr2[arr1ColIdx][arr2ColIdx];
            }
            arr.push(sum);
        }
        result.push(arr);
    }
    return result;
}
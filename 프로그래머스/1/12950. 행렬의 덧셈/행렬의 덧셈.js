function solution(arr1, arr2) {
    const ans = [];
    arr1.forEach((arr, idx) => {
        const tmp = [];
        for(let i = 0; i < arr.length; i++) {
            tmp.push(arr[i] + arr2[idx][i]);
        }
        ans.push(tmp);
    })
    return ans;
}
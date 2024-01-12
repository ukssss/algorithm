function solution(arr) {
    let cnt = arr[arr.length - 1];
    
    while (true) {
        const status = arr.every((num) => cnt % num === 0);
        if (status) return cnt;
        else cnt++;
    }
}
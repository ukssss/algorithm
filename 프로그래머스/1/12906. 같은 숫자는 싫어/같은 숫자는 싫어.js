function solution(arr) {
    let ans = [arr[0]];
    let now = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if(now !== arr[i]) {
            now = arr[i];
            ans.push(now);
        }
    }
    
    return ans;
}
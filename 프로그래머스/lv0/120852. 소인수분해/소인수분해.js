function solution(n) {
    const arr = [];
    let temp = n;
    
    for(let i = 2; i <= n; i++) {
        while(true) {
            if(temp % i === 0) {
                arr.push(i);
                temp /= i;
            }
            else {
                break;
            }
        }
    }
    
    let ans = [...new Set(arr)];
    return ans;
}
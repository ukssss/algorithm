function solution(n) {
    const arr = Array.from({length: n}, (_, idx) => Array(idx + 1).fill(0));
    let curX = -1;
    let curY = 0;
    let cnt = 0;
    const ans = [];
    
    while (n > 0) {
        for (let i = 0; i < n; i++) {
            curX++;
            cnt++;
            arr[curX][curY] = cnt;
        }
        
        for (let i = 0; i < n - 1; i++) {
            curY++;
            cnt++;
            arr[curX][curY] = cnt;
        }
        
        for (let i = 0; i < n - 2; i++) {
            curX--;
            curY--;
            cnt++;
            arr[curX][curY] = cnt;
        }
        
        n -= 3;
    }
    
    for (const layer of arr) {
        ans.push(...layer);
    }
    
    return ans;
}
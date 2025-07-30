function solution(box, n) {
    const [row, col, height] = box;
    
    let rowCnt = parseInt(row / n);
    let colCnt = parseInt(col / n);
    let heightCnt = parseInt(height / n);
    
    let cnt = rowCnt * colCnt * heightCnt;
    
    return cnt;
}
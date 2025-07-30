function solution(arr) {
    let answer = [0, 0];
    let N = arr.length;
    
    const check = (nx, ny, length) => {
        let start = arr[nx][ny];
        let half = Math.floor(length / 2);
        
        for(let i= nx; i < nx + length; i++) {
            for(let j = ny; j < ny + length; j++) {
                if(arr[i][j] !== start) {
                    check(nx, ny, half);
                    check(nx + half, ny, half);
                    check(nx, ny + half, half);
                    check(nx + half, ny + half, half);
                    return;
                }
            }
        }
        answer[start]++;
    }
    check(0, 0, N);
    return answer;
}
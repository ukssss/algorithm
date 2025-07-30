function solution(wallpaper) {
    let row = wallpaper.length;
    let col = wallpaper[0].length;
    let start = [row, col];
    let end = [0, 0];
    
    for(let i = 0; i < row; i++) {
        const temp = wallpaper[i].split("");
        for(let j = 0; j < col; j++) {
            if(temp[j] === "#") {
                start = [Math.min(start[0], i), Math.min(start[1], j)];
            }
        }
    }
    
    for(let i = row; i > 0; i--) {
        const temp = wallpaper[i - 1].split("");
        for(let j = col; j > 0; j--) {
            if(temp[j - 1] === "#") {
                end = [Math.max(end[0], i), Math.max(end[1], j)];
            }
        }
    }
    
    const result = [...start, ...end];
    return result;
}
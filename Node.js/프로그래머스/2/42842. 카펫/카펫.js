function solution(brown, yellow) {
    let width = 3;
    let height = 3;
    
    while(width >= height) {
        let y = (width - 2) * (height - 2); 
        let b = width * height - y;
        if (y === yellow && b === brown) return [width, height];
        else if (y < yellow && b === brown) {
            width--;
            height++;
        } else width++;
    }
}
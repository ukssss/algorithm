function solution(park, routes) {
    let maxRow = park.length - 1;
    let maxCol = park[0].length - 1;
    
    let row = park.findIndex((arr) => arr.includes("S"));
    let col = park[row].indexOf("S");
    
    routes.forEach((position) => {
        const [D, N] = position.split(" ").map((val, idx) => idx === 1 ? Number(val) : val);
        
        let tempRow = row;
        let tempCol = col;
        let check = true;
        
        for(let i = 0; i < N; i++) {
            if (D === "E") tempCol++;
            else if (D === "W") tempCol--;
            else if (D === "S") tempRow++;
            else if (D === "N") tempRow--;
            
            if(tempRow < 0 
               || tempRow > maxRow 
               || tempCol < 0 
               || tempCol > maxCol
               || park[tempRow][tempCol] === "X") {
                check = false;
                break;
            }
        }
        
        if(check) {
            row = tempRow;
            col = tempCol;
        }
    })
    
    return [row, col];
}

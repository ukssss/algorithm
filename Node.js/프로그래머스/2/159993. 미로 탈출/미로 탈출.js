function BFS(start, arr, target) {
    const transX = [0, 0, -1, 1];
    const transY = [-1, 1, 0, 0];
    const queue = [start]
    let cnt = 0;
    arr[start[0]][start[1]] = "X";
    
    while(queue.length > 0) {
        const size = queue.length;
        
        for(let i = 0; i < size; i++) {
            const [x, y] = queue.shift();
            
            for(let j = 0; j < 4; j++) {
                const nx = x + transX[j];
                const ny = y + transY[j];
                
                if(nx >= 0 && ny >= 0 && nx < arr.length && ny < arr[0].length && arr[nx][ny] !== "X") {
                    if(arr[nx][ny] === target) return cnt + 1;
                    else {            
                        queue.push([nx, ny]);
                        arr[nx][ny] = "X";   
                    }
                }
            }
        }
        cnt++;
    }
    return -1;
}

function solution(maps) {
    let lCords;
    let sCords;
    let maps1 = maps.map((element) => element.split(""));
    let maps2 = maps.map((element) => element.split(""));
    
    for(let x = 0; x < maps.length; x++) {
        for(let y = 0; y < maps[0].length; y++) {
            if(maps[x][y] === "L") lCords = [x, y];
            else if(maps[x][y] === "S") sCords = [x, y];
        }
    }
    
    let sToL = BFS(sCords, maps1, "L");
    let lToE = BFS(lCords, maps2, "E");
    
    if(sToL === -1 || lToE === -1) return -1;
    else return sToL + lToE;
}
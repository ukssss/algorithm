function solution(dirs) {
    const q = [...dirs.split("")];
    const visited = {};
    const cur = [0, 0];
    let prev = [0, 0];
    let cnt = 0;
    
    while (q.length > 0) {
        const node = q.shift();
        let status = false;
        
        switch (node) {
            case "U": 
                if (cur[0] + 1 <= 5) {
                    cur[0] += 1;  
                    status = true;
                }
                break;
            case "D":
                if (cur[0] -1 >= -5) {
                    cur[0] -= 1;
                    status = true;
                }
                break;
            case "R":
                if (cur[1] + 1 <= 5) {
                    cur[1] += 1;
                    status = true;
                }
                break;
            case "L":
                if (cur[1] - 1 >= -5) {
                    cur[1] -= 1;
                    status = true;
                }
                break;
        }
        
        if (visited[prev + cur] === undefined && visited[prev + cur] === undefined && status === true) {
            visited[prev + cur] = true;
            visited[cur + prev] = true;
            cnt++;
        }
        
        prev = [...cur];
    } 
    
    return cnt;
}
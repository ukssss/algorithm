function solution(maps) {
    const result = [];
    const [R, C] = [maps.length, maps[0].length];
    const moves = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const visited = Array.from({length: R}, () => Array(C).fill(false));
    
    function bfs(a, b) {
        let cnt = 0;
        const q = [[a, b]];
        visited[a][b] = true;
        cnt += Number(maps[a][b]);
        
        while(q.length) {
            const [r, c] = q.shift();
            
            for(let i = 0; i < 4; i++) {
                const nr = r + moves[i][0];
                const nc = c + moves[i][1];
                
                if(nr >= 0 && nc >= 0 && nr < R && nc < C && !visited[nr][nc] && maps[nr][nc] !== "X") {
                    visited[nr][nc] = true;
                    cnt += Number(maps[nr][nc]);
                    q.push([nr, nc]);
                }
            }
        }
        result.push(cnt);
    }
    
    for(let i = 0; i < R; i++) {
        for(let j = 0; j < C; j++) {
            if(!visited[i][j] && maps[i][j] !== "X") bfs(i, j);
        }
    }
    
    result.sort((a, b) => a - b);
    return result.length > 0 ? result : [-1];
};
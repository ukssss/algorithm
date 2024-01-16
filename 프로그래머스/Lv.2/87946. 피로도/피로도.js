function solution(k, dungeons) {
    const N = dungeons.length;
    const visited = Array(N).fill(false);
    let ans = 0;
    
    function dfs(k, cnt) {
        ans = Math.max(ans, cnt);
        
        for (let i = 0; i < N; i++) {
            if (!visited[i] && k >= dungeons[i][0]) {
                visited[i] = true;
                k -= dungeons[i][1];
                
                dfs(k, cnt + 1);
                
                visited[i] = false;
                k += dungeons[i][1];
            }
        }
    }
    
    dfs(k, 0);
    return ans;
}
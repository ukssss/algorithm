function dfs(k, dungeons, visited, result, cnt) {
    for (let i = 0; i < dungeons.length; i++) {
        if (!visited[i] && k >= dungeons[i][0]) {
            visited[i] = true;
            k -= dungeons[i][1];
            result.push(cnt + 1);
            dfs(k, dungeons, visited, result, cnt + 1);
            visited[i] = false;
            k += dungeons[i][1];
        }
    }
}

function solution(k, dungeons) {
    const visited = Array(dungeons.length).fill(false);
    const result = [];
    let cnt = 0;
    dfs(k, dungeons, visited, result, cnt);
    return Math.max(...result);
}
function solution(user_id, banned_id) {
    const visited = Array(user_id.length).fill(false);
    const regex = banned_id.map((id) => new RegExp(`^${id.replaceAll('*', '.')}$`));
    const set = new Set();
    let arr = [];
    
    function dfs(idx, arr) {
        if (idx === banned_id.length) {
            set.add(arr.sort().join(','));
        } else {
            for (let i = 0; i < user_id.length; i++) {
                if (visited[i]) {
                    continue;
                }
                
                if (user_id[i].match(regex[idx])) {
                    visited[i] = true;
                    dfs(idx + 1, [...arr, user_id[i]]);
                    visited[i] = false;
                }
            }
        }
        
    }
    dfs(0, arr);
    return set.size;
}
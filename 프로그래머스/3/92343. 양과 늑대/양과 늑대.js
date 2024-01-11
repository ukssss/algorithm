function solution(info, edges) {
    const N = info.length;
    const graph = Array.from({length: N}, () => []);
    for (const [start, finish] of edges) graph[start] = [...graph[start], finish];
    let ans = 0;
    
    function dfs(node, sheep, wolf, possible) {
        info[node] ? wolf++ : sheep++;
        ans = Math.max(ans, sheep);
        if (sheep <= wolf) return;
        
        const possibleNode = [...possible, ...graph[node]];
        possibleNode.splice(possibleNode.indexOf(node), 1);
        
        for (const nextNode of possibleNode) dfs(nextNode, sheep, wolf, possibleNode);
    }

    dfs(0, 0, 0, [0]);
    return ans;
}
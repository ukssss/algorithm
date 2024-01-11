function solution(n, edge) {
    const graph = Array.from({length: n + 1}, () => []);
    for (const [start, finish] of edge) {
        graph[start] = [...graph[start], finish];
        graph[finish] = [...graph[finish], start];
    }

    const queue = [1];
    const visited = [0, 1];
    
    while (queue.length > 0) {
        const node = queue.shift();
        const nextNode = graph[node];
        
        for (const next of nextNode) {
            if (!visited[next]) {
                visited[next] = visited[node] + 1;
                queue.push(next);
            }
        }
    }
    
    const max = Math.max(...visited);
    return visited.filter((cnt) => cnt === max).length;
}
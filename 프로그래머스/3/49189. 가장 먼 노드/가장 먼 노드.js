function solution(n, edge) {
    const graph = Array.from({length: n + 1}, () => []);
    edge.forEach(([start, finish]) => {
        graph[start] = [...graph[start], finish];
        graph[finish] = [...graph[finish], start];
    })
    
    const queue = [1];
    const visited = [0, 1];
    
    while (queue.length > 0) {
        const node = queue.shift();
        const nextNode = graph[node];
        
        nextNode.forEach((next) => {
            if (!visited[next]) {
                visited[next] = visited[node] + 1;
                queue.push(next);
            }
        })
    }
    
    const max = Math.max(...visited);
    return visited.filter((node) => node === max).length;
}
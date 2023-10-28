function solution(N, road, K) {
    const graph = Array.from({length: N + 1}, () => []);
    
    for(let info of road) {
        const [a,b,c] = info;
        graph[a].push({ to: b, dist: c });
        graph[b].push({ to: a, dist: c});
    }
    
    const dist = Array(graph.length).fill(Infinity);
    const queue = [{ to: 1, dist: 0 }];
    dist[1] = 0;
    
    while(queue.length) {
        const { to } = queue.pop();
        
        graph[to].forEach((next) => {
            const acc = dist[to] + next.dist;
            if(dist[next.to] > acc) {
                dist[next.to] = acc;
                queue.push(next);
            }
        })
    }
    
    let cnt = 0;
    for(let element of dist) {
        if(element <= K) cnt++;
    }
    
    console.log(dist);
    
    return cnt;
}
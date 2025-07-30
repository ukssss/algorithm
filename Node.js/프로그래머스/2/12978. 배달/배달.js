function solution(N, road, K) {
    const graph = Array.from({ length: N + 1 }, () => []);

    for (let [a, b, c] of road) {
        graph[a].push({ to: b, dist: c });
        graph[b].push({ to: a, dist: c });
    }

    const dist = Array.from({ length: graph.length }, () => Infinity);
    const queue = [{ to: 1, dist: 0 }];
    dist[1] = 0;

    while (queue.length) {
        const { to } = queue.shift();

        graph[to].forEach((next) => {
            const acc = dist[to] + next.dist;
            if (dist[next.to] > acc) {
                dist[next.to] = acc;
                queue.push(next);
            }
        });
    }

    let cnt = 0;
    dist.forEach((distance) => {
        distance <= K && cnt++;
    });

    return cnt;
}
function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];
    const queue = [[0, 0]];
    const visited = Array.from({ length: n }, () => Array.from({ length: m }, () => false));
    visited[0][0] = true;
    let cnt = 0;

    while (queue.length) {
        const size = queue.length;
        cnt++;

        for (let i = 0; i < size; i++) {
            const node = queue.shift();

            for (let j = 0; j < 4; j++) {
                const nx = node[0] + dx[j];
                const ny = node[1] + dy[j];

                if (
                    nx >= 0 &&
                    ny >= 0 &&
                    nx < n &&
                    ny < m &&
                    !visited[nx][ny] &&
                    maps[nx][ny] === 1
                ) {
                    if (nx === n - 1 && ny === m - 1) {
                        cnt++;
                        return cnt;
                    }

                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                }
            }
        }
    }

    return -1;
}
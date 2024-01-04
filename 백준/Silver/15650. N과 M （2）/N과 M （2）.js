const [n, m] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function solution(n, m) {
    const arr = Array.from({ length: m }).fill(0);
    const visited = Array.from({ length: n }).fill(false);
    const result = [];

    function dfs(k) {
        if (k === m) {
            const tmp = [];
            for (let i = 0; i < m; i++) {
                tmp.push(arr[i]);
            }
            tmp.sort((a, b) => a - b);
            if (!result.includes(tmp.join(' '))) result.push(tmp.join(' '));
        }

        for (let i = 1; i <= n; i++) {
            if (!visited[i]) {
                visited[i] = true;
                arr[k] = i;
                dfs(k + 1);
                visited[i] = false;
            }
        }
    }

    dfs(0);
    return result.join('\n');
}

console.log(solution(n, m));
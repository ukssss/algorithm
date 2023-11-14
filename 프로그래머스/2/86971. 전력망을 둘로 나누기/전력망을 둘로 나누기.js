function solution(n, wires) {
    let min = Infinity;

    wires.forEach(([eraseFrom, eraseTo]) => {
        const connect = {};
        for (let i = 1; i <= n; i++) {
            connect[i] = [];
        }

        wires.forEach(([from, to]) => {
            if (!(eraseFrom === from && eraseTo === to)) {
                connect[from].push(to);
                connect[to].push(from);
            }
        });

        let stack = [1];
        const visited = [];

        while (stack.length) {
            const node = stack.shift();
            if (!visited.includes(node)) {
                stack = [...stack, ...connect[node]];
                visited.push(node);
            }
        }

        let first = n - visited.length;
        let second = visited.length;
        min = Math.min(min, Math.abs(first - second));
    });

    return min;
}
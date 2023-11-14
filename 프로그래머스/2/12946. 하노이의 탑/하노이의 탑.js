function solution(n) {
    let ans = [];

    function hanoi(n, from, to, via) {
        if (n === 1) ans.push([from, to]);
        else {
            hanoi(n - 1, from, via, to);
            ans.push([from, to]);
            hanoi(n - 1, via, to, from);
        }
    }

    hanoi(n, 1, 3, 2);
    return ans;
}
function solution(n) {
        let down = 1;
        let up = 2;
        if (n === 1 || n === 2) return n;
        for (let i = 2; i < n; i++) {
            down *= i;
            up *= i + 1;
            if (down <= n && up > n) {
                return i
                break;
            }
        }
}
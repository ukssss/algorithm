function solution(n, k) {
    let cnt = 0;
    const change = n.toString(k).split("0").map(Number).filter((num) => num !== 1 && num !== 0);
    change.forEach((num) => {
        let check = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                check = false;
                break;
            }
        }
        if (check) cnt++;
    })
    return cnt;
}
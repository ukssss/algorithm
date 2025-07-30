function solution(number, limit, power) {
    const arr = Array(number).fill(0).map((_, idx) => idx + 1);
    const answer = arr.map((num) => {
        let cnt = 0;
        for(let i = 1; i < Math.sqrt(num); i++) {
            num % i === 0 && cnt++
        }
        cnt = cnt * 2 + Number.isInteger(Math.sqrt(num));
        cnt = cnt > limit ? power : cnt;
        return cnt;
    }).reduce((acc, cur) => acc + cur, 0);
    return answer;
}
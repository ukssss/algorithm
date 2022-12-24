function solution(balls, share) {
    let answer = 0;
    
    let fact = function (k) {
        let num = BigInt(1);
        for (let i = 1; i <= k; i++) {
            num *= BigInt(i);
        }
        return num;
    };

    if (balls === share) {
      answer = 1;
    } else {
      answer = fact(balls) / (fact(balls - share) * fact(share));
    }
    
    return answer;
}
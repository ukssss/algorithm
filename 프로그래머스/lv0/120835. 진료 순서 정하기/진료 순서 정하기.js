function solution(emergency) {
    let sorted = [...emergency].sort((a, b) => b - a);
    let answer = [];
    for (let i = 0; i < emergency.length; i++) {
        for (let j = 0; j < sorted.length; j++) {
            if (emergency[i] === sorted[j]) {
                answer.push(j+1);
            }
        }
    }
    return answer;
}
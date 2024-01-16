function solution(s) {
    const tuple = [];
    s.slice(2, s.length - 2).split("},{").forEach((element) => {
        const tmp = element.split(",").map(Number);
        tuple.push(tmp);
        tuple.sort((a, b) => a.length - b.length);
    });
    const answer = [];
    tuple.map((element) => {
        element.forEach((num) => {
            if (!answer.includes(num)) answer.push(num);
        })
    })
    return answer;
}
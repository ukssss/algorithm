function solution(s) {
    let answer = false;
    s = s.split("");
    if (s.length === 4 || s.length === 6) {
        const tmp = s.filter((element) => {
            if(isNaN(element / 1)) return element;
        })
        if(tmp.length === 0) answer = true;                             
    }
    
    return answer;
}
function solution(survey, choices) {
    let obj = {};
    
    survey.forEach((quiz, idx) => {
        const tmp = quiz.split("");
        obj[quiz[0]] = obj[quiz[0]] === undefined ? 0 : obj[quiz[0]];
        obj[quiz[1]] = obj[quiz[1]] === undefined ? 0 : obj[quiz[1]];
        
        if (choices[idx] < 4) {
            let point = 0;
            if (choices[idx] === 1) {
                point = 3;
            } else if (choices[idx] === 2) {
                point = 2
            } else {
                point = 1;
            }
            obj[quiz[0]] += point;
        } else if (choices[idx] > 4) {
            let point = 0;
            if (choices[idx] === 5) {
                point = 1;
            } else if (choices[idx] === 6) {
                point = 2
            } else {
                point = 3;
            }
            obj[quiz[1]] += point;
        }
    })
    
    let ans = '';
    
    if (obj["R"] < obj["T"]) ans += "T";
    else ans += "R";
    if (obj["C"] < obj["F"]) ans += "F";
    else ans += "C";
    if (obj["J"] < obj["M"]) ans += "M";
    else ans += "J";
    if (obj["A"] < obj["N"]) ans += "N";
    else ans += "A";
    
    return ans;
}
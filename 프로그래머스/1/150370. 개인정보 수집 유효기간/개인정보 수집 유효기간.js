function solution(today, terms, privacies) {
    const arr = [];
    const now = today.split(".").map(Number);
    
    for(let i = 0; i < privacies.length; i++) {
        let [start, type] = privacies[i].split(" ");
        let month = 0;
        
        for(let term of terms) {
            const [termType, termMonth] = term.split(" ");
            if(termType === type) {
                month = Number(termMonth);
                break;
            }
        }
        
        start = start.split(".").map(Number);
        start[0] = start[0] + Math.floor((start[1] + month) / 12);
        start[1] = Math.floor((start[1] + month / 12)) > 0 ? (start[1] + month) % 12 : start[1] + month;
        start[2] = start[2] - 1;
        
        if(start[1] === 0) {
            start[0] -= 1
            start[1] = 12;
        }
        if(start[2] === 0) {
            start[1] -= 1;
            start[2] = 28;
        }
        
        if(now[0] > start[0]) {
            arr.push(i + 1);
        } else if (now[0] === start[0] && now[1] > start[1]) {
            arr.push(i + 1);
        } else if (now[0] === start[0] && now[1] === start[1] && now[2] > start[2]) {
            arr.push(i + 1);
        }
    }
    
    return arr;
}
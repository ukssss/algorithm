function solution(name, yearning, photo) {
    let result = [];
    
    for(let arr of photo) {
        let point = 0;
        
        for(let n of arr) {
            const check = name.indexOf(n);
            if(check !== -1) {
                point += yearning[check];   
            }
        }
        
        result.push(point);
    }
    
    return result;
}
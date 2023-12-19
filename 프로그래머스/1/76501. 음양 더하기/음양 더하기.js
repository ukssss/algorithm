function solution(absolutes, signs) {
    let result = 0;
    
    absolutes.forEach((absolute, idx) => {
        if(signs[idx]) result += absolute;
        else result -= absolute;
    })
    
    return result;
}
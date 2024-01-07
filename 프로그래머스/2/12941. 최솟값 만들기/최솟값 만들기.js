function solution(A,B){
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    
    let result = 0;
    
    A.forEach((e, idx) => {
        result += e * B[idx];
    })
    
    return result;
}
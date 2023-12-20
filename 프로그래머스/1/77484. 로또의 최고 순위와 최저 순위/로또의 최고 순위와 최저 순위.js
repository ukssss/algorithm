function solution(lottos, win_nums) {
    let result = [0, 0];
    let remain = lottos.length;
    let nothing = 0;
    
    lottos.forEach((lotto, idx) => {
        const tmp = win_nums.indexOf(lotto);
        
        if(tmp !== -1) {
            win_nums.splice(tmp, 1);
            remain--;
        }
        
        if(lotto === 0) nothing++;
    });
    
    result[0] = remain - nothing + 1 > 5 ? 6 : remain - nothing + 1; 
    result[1] = remain + 1 > 5 ? 6 : remain + 1;
    
    return result;
}
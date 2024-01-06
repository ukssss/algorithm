function solution(k, tangerine) {
    const obj = {};
    let cnt = 0;
    
    tangerine.forEach((e, idx) => {
        if(obj.hasOwnProperty(e)) obj[e]++;
        else obj[e] = 1;
    })
    
    const sortedObj = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    for(let [, value] of sortedObj) {
        k -= value;
        cnt++;
        
        if(k <= 0) break;
    }
    
    return cnt;
}
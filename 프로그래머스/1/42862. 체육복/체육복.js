function solution(n, lost, reserve) {
    let cnt = n;
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);
    
    for(let i = 1; i <= n ; i++) {
        if(lost.includes(i)) {
            if (reserve.includes(i)) {
                const idx = reserve.indexOf(i);
                reserve.splice(idx, 1);
            } else if (reserve.includes(i-1) && !lost.includes(i-1)) {
                const idx = reserve.indexOf(i-1);
                reserve.splice(idx, 1);
            } else if (reserve.includes(i+1) && !lost.includes(i+1)) {
                const idx = reserve.indexOf(i+1);
                reserve.splice(idx, 1);
            } else {
                cnt--;
            }
        } 
    }
    
    return cnt;
}
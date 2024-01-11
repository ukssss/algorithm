function solution(n, t, m, p) {
    const ans = [];
    const arr = [];
    let order = 1;
    let cnt = 0;
    
    while (ans.length < t) {
        if (arr.length === 0) {
            const tmp = cnt.toString(n).split("");
            arr.push(...tmp);
            cnt++;
        }
        
        const current = arr.shift().toUpperCase();
        if (order === p) ans.push(current);
                
        order++;
        if (order > m) order = 1;
    }
    
    return ans.join("");
}
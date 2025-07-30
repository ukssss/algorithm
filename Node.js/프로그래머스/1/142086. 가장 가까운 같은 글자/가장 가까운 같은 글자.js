function solution(s) {
    const visited = [];
    const ans = [];
    
    for(let v of s) {
        if(!visited.includes(v)) {
            visited.unshift(v);
            ans.push(-1);
        } else {
            ans.push(visited.indexOf(v) + 1);
            visited.unshift(v);
        }
    }
    
    return ans;
}
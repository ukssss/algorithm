function solution(k, score) {
    const list = [];
    const ans = [];
    
    for(let i = 0; i < score.length; i++) {
        list.push(score[i]);
        list.sort((a, b) => b - a);
        
        if(list.length > k) list.pop();
        ans.push(list[list.length - 1]);
    }
    return ans;
}
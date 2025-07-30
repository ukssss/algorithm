function solution(keymap, targets) {
    let N = keymap.length;
    let ans = [];
    
    for(let target of targets) {
        let cnt = 0;
        for(let v of target) {
            let arr = []
            for(let i = 0; i < N; i++) {
                const temp = keymap[i].indexOf(v) + 1;
                if(temp > 0) {
                    arr[i] = temp;
                } else {
                    arr[i] = Infinity;
                }
                
            }   
            cnt += Math.min(...arr);
        }
        
        if(cnt === Infinity) {
            cnt = -1;
        }
        ans.push(cnt);
    }
    
    return ans;
}
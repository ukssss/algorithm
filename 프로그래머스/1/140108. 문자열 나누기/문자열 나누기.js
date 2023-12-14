function solution(s) {
    const arr = s.split("");
    const ans = [];

    while(arr.length > 0) {
        let cnt = 0;
        const node = arr[cnt];
        let first = [node];
        let second = [];
        cnt++
        
        while(true) {
            const temp = arr[cnt];
            if(node === temp) first.push(temp);
            else second.push(temp);
            
            if(first.length !== second.length) cnt++;
            else break;
        }
    
        ans.push(arr.splice(0, cnt + 1).join(""));
    }
    
    return ans.length;
}
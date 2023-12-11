function solution(s, skip, index) {
    let ans = [];
    
    for(const v of s) {
        let code = v.charCodeAt();
        let arr = [];
        
        while (arr.length !== index) {
            code += 1;
            
            if(code >= 123) {
                code -= 26;   
            }
            
            const temp = String.fromCharCode(code);
            
            if(!skip.includes(temp)) arr.push(temp);
        }
        
        ans.push(arr[index - 1]);
    }
    
    return ans.join("");
}
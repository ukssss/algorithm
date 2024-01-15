function solution(s) {
    const q = [...s];
    const size = s.length;
    let cnt = 0;
    let ans = 0;
    
    while (cnt < size) {
        const stack = [];
        
        q.forEach((element) => {
            if (element === ")" && stack[stack.length - 1] === "(") {
                stack.pop();
            } else if (element === "]" && stack[stack.length - 1] === "[") {
                stack.pop();
            } else if (element === "}" && stack[stack.length - 1] === "{") {
                stack.pop();
            } else {
                stack.push(element);
            }
        })
        
        stack.length === 0 ? ans++ : '';
        const tmp = q.shift();
        q.push(tmp);
        cnt++;
    }
    
    return ans;
}
function solution(ingredient) {
    let ans = 0;
    let stack = [];
    ingredient.forEach((food) => {
        stack.push(food);
        if (stack.length >= 4) {
            if (stack[stack.length - 4] === 1 
                && stack[stack.length - 3] === 2 
                && stack[stack.length - 2] === 3
                && stack[stack.length - 1] === 1 ) {
                
                for(let i = 0; i < 4; i++) {
                    stack.pop();
                }
                ans++;
            }
        }
    })
    return ans;
}
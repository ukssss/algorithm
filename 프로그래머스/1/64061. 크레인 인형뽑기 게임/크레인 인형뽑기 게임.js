function solution(board, moves) {
    const stack = [];
    let cnt = 0;
    
    for(let move of moves) {
        for(let arr of board) {
            if(arr[move - 1] !== 0) {
                stack.push(arr[move - 1]);
                arr[move - 1] = 0;
                break;
            }
        }
        if(stack.length >= 2 && stack[stack.length - 1] === stack[stack.length - 2]) {
            stack.pop();
            stack.pop();
            cnt += 2;
        } 
    }
    
    return cnt;
}
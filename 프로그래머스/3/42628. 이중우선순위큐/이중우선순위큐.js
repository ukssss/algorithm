function solution(operations) {
    const queue = [];
    
    operations.forEach((operation) => {
        operation = operation.split(" ");
        const type = operation[0];
        const num = +operation[1];
                
        if (type === "I") {
            queue.push(num);
            queue.sort((a, b) => a - b);
        } else if (type === "D") {
            if (num === 1) {
                queue.pop();
            } else if (num === -1) {
                queue.shift();
            }
        }
    })
    
    if (queue.length === 0) return [0, 0];
    else return [queue[queue.length - 1], queue[0]];
}
function solution(numbers) {
    const stack = [];
    const result = Array(numbers.length).fill(-1);
    
    numbers.forEach((number) => {
        let sLastIdx = stack.length - 1;
        if(number > stack[sLastIdx]) {
            let backTrackingIdx = 0;
            while(number > stack[sLastIdx - backTrackingIdx]) {
                if(result[sLastIdx - backTrackingIdx] === -1) {
                    result[sLastIdx - backTrackingIdx] = number;
                }
                backTrackingIdx++;
            }
        }
        stack.push(number);
    })
    
    return result;
}
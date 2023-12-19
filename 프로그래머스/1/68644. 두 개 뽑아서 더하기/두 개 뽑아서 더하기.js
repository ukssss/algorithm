function solution(numbers) {
    let ans = [];
    
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            const tmp = numbers[i] + numbers[j];
            if(!ans.includes(tmp)) ans.push(tmp);       
        }
    }
    
    ans.sort((a, b) => a - b)
    return ans;
}
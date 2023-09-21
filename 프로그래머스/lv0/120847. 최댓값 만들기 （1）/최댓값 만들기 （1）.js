function solution(numbers) {
    let max = 0;
    
    for(let i = 0; i < numbers.length; i++) {
        for(let j = 0; j < i; j++) {
            let temp = numbers[i] * numbers[j];
            max = Math.max(max, temp);
        } 
    }
    
    return max;
}
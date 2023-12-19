function solution(numbers) {
    let ans = 0;
    for(let i = 0; i < 10; i++) {
        if(!numbers.includes(i)) ans += i;
    }
    return ans;
}
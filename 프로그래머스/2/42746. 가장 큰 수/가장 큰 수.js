function solution(numbers) {
    let answer = '';

    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = String(numbers[i]);
    }

    numbers.sort(condition);
    console.log(numbers);
    numbers.forEach((num) => {
        answer += num;
    });

    return answer[0] === '0' ? '0' : answer;
}

function condition(a, b) {
    if (a + b < b + a) return 1;
    if (a + b > b + a) return -1;
    if (a + b === b + a) return 0;
}
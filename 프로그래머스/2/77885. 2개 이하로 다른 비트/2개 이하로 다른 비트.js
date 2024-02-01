function solution(numbers) {
    const answer = [];

    for (const number of numbers) {
        if (number % 2 === 0) answer.push(number + 1);
        else {
            const start = number.toString(2);
            const findLastZero = start.lastIndexOf('0');
            if (findLastZero === -1) {
                answer.push(parseInt('10' + start.slice(1), 2));
            } else {
                const value = start.slice(0, findLastZero) + '10' + start.slice(findLastZero + 2);
                answer.push(parseInt(value, 2));
            }
        }
    }

    return answer;
}
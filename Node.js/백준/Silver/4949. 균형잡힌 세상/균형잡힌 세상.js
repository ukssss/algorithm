const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.pop();

function solution() {
    const result = [];
    input.map((sentence) => {
        const stack = [];

        for (let i = 0; i < sentence.length; i++) {
            if (sentence[i] === '[' || sentence[i] === '(') {
                stack.push(sentence[i]);
            } else if (sentence[i] === ']') {
                if (stack[stack.length - 1] === '[') stack.pop();
                else stack.push(sentence[i]);
            } else if (sentence[i] === ')') {
                if (stack[stack.length - 1] === '(') stack.pop();
                else stack.push(sentence[i]);
            }
        }

        result.push(stack.length === 0 ? 'yes' : 'no');
    });

    return result.join('\n');
}

console.log(solution());
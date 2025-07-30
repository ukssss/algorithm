const [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution() {
    const stack = [];
    const result = [];
    input.map((element) => {
        element = String(element).split(' ').map(Number);

        switch (element[0]) {
            case 1:
                stack.push(element[1]);
                break;
            case 2:
                result.push(stack.length > 0 ? stack.pop() : -1);
                break;
            case 3:
                result.push(stack.length);
                break;
            case 4:
                result.push(stack.length > 0 ? 0 : 1);
                break;
            case 5:
                result.push(stack.length > 0 ? stack[stack.length - 1] : -1);
                break;
        }
    });

    return result.join('\n');
}

console.log(solution());
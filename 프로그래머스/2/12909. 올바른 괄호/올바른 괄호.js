function solution(s) {
    if (s[0] === ')') {
        return false;
    }

    let temp = ['('];

    for (let i = 1; i < s.length; i++) {
        if (s[i] === '(') temp.push('(');
        else temp.pop();
    }

    if (temp.length === 0) return true;
    else return false;
}
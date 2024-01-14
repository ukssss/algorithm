function solution(elements) {
    const arr = [...elements, ...elements];
    const num = [];

    elements.forEach((element, idx) => {
        for (let i = 0; i < elements.length; i++) {
            const tmp = arr.slice(i, i + idx + 1).reduce((acc, cur) => acc + cur, 0);
            num.push(tmp);
        }
    })
    
    const ans = new Set(num);
    return [...ans].length;
    
}
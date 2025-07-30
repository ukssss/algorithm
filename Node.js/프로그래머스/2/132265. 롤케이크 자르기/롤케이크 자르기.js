function solution(topping) {
    const first = new Set();
    const second = new Set();
    const fArr = [];
    const sArr = [];
    
    topping.forEach((taste, idx) => {
        const rest = topping.at(-idx);
        first.add(taste);
        if (idx !== 0) second.add(rest);
        fArr.push(first.size);
        sArr.push(second.size);
    })
    
    return fArr.reduce((acc, cur, idx) => (cur === sArr.at(-idx - 1) ? acc + 1 : acc), 0);
}
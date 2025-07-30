function solution(want, number, discount) {
    let result = 0;
    discount.forEach((_, idx) => {
        const copy = discount.slice(idx, idx + 10);
        if (copy.length < 10) return result;
        let flag = 0;
        want.forEach((product, wantIdx) => {
            if ([...copy].filter((e) => e === product).length === number[wantIdx]) flag++;
        })
        if (flag === want.length) result++;
    })
    return result;
}
function solution(storey) {
    let cnt = 0;
    let help = 0;
    const str = storey.toString();

    for (let i = str.length - 1; i >= 0; i--) {
        const num = Number(str[i]) + help;
        help = 0;
        if (num > 5) {
            cnt += 10 - num;
            help = 1;
        } else if (num === 5 && i > 0) {
            if (Number(str[i - 1] >= 5)) {
                cnt += num;
                help = 1;
            } else {
                cnt += num;
            }
        } else {
            cnt += num;
        }
    }

    if (help > 0) cnt += help;
    return cnt;
}
function solution(s) {
    const arr = s.split(" ");
    const ans = [];
    arr.forEach((e) => {
        const tmp = e.split("");
        let filteredTmp = '';
        tmp.forEach((s, idx) => {
            filteredTmp += idx === 0 ? s.toUpperCase() : s.toLowerCase();
        })
        ans.push(filteredTmp);
    })
    return ans.join(" ");
}
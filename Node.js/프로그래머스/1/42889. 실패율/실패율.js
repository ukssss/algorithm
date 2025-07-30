function solution(N, stages) {
    const obj = {};
    
    for(let i = 1; i <= N; i++) {
        const tmp = stages.filter((stage) => stage >= i);
        const total = tmp.length;
        const ing = tmp.filter((stage) => stage === i).length;
        obj[i] = ing / total;
    }
    
    const ans = [];
    Object.entries(obj).sort(([, a], [, b]) => b - a).forEach(([a, ]) => ans.push(Number(a)));
    return ans;
}
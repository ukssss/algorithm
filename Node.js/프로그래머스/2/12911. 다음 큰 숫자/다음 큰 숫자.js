function solution(n) {
    const check = n.toString(2).split("").filter((e) => e === "1").length;
    
    while(true) {
        n++;
        const cur = n.toString(2).split("").filter((e) => e === "1").length;
        if(cur === check) return n;
    }
}
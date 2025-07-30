function solution(s) {
    let cnt = 0;
    let zero = 0;
    
    while(s !== "1") {
        const tmp = s.split("").filter((e) => e === "0").length;
        s = s.split("").filter((e) => e === "1").length.toString(2);
        zero += tmp;
        cnt++;
    }
    
    return [cnt, zero];
}
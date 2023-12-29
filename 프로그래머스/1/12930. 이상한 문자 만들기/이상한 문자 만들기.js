function solution(s) {
    let ans = "";
    s = s.split(" ");
    s.forEach((word, idx) => {
        word = word.split("");
        word.forEach((spell, idx) => idx % 2 === 0 ? ans += spell.toUpperCase() : ans += spell.toLowerCase());
        if(idx !== s.length - 1) ans += " ";
    })
    return ans;
}
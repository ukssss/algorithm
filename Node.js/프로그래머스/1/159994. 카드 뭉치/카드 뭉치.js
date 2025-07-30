function solution(cards1, cards2, goal) {
    for(const v of goal) {
        if(cards1[0] === v) {
            cards1.shift();
        } else if (cards2[0] === v) {
            cards2.shift();
        } else {
            return "No"
        }
    }
    
    return "Yes";
}
function solution(my_string, letter) {
    let answer = '';
    let div = my_string.split("");
    
    for (let i = 0; i < div.length; i++) {
        if (div[i] !== letter) {
            answer += div[i];
        }
    }
    return answer;
}
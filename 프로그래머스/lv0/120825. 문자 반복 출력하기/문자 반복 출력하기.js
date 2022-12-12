function solution(my_string, n) {
    let answer = '';
    const div = my_string.split("");
    
    for (let i = 0; i < div.length; i++) {
      for (let j = 0; j < n; j++) {
        answer += div[i];
      }
    }
    
    
    return answer;
}
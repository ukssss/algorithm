function solution(age) {
    const ageStr = age.toString();
    const arr = ageStr.split('');
    const space = "abcdefghijklmnopqrstuvwxyz".split("");
    let answer = '';
    
    for(let i = 0; i < arr.length; i++) {
        answer += space[parseInt(arr[i])];
    }
    return answer;
}
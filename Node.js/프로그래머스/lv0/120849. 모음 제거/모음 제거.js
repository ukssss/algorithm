function solution(my_string) {
    const vowel = ["a","e","i","o","u"];
    const temp = my_string.split("");
    let result = temp.filter((v)=> !vowel.includes(v));
    
    return result.join("")
}
function solution(my_string) {
    const arr = my_string.split("");
    const ans = [...new Set(arr)];
    
    return ans.join("");
}
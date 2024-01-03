function solution(arr, divisor) {
    const filteredArr = arr.sort((a, b) => a - b).filter((element) => element % divisor === 0);
    return filteredArr.length > 0 ? filteredArr : [-1]; 
}
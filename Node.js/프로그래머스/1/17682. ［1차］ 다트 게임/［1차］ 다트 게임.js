function solution(dartResult) {
    const arr = [];
    let tmp = 0;
    
    for(let i = 0; i < dartResult.length; i++) {
        if(dartResult[i] === "*") {
            arr[arr.length - 2] = arr[arr.length - 2] * 2;
            arr[arr.length - 1] = arr[arr.length - 1] * 2;
        } else if (dartResult[i] === "#") {
            arr[arr.length - 1] = arr[arr.length - 1] * (-1);
        } else if (dartResult[i] === "S") {
            tmp = tmp ** 1
            arr.push(tmp);
            tmp = 0;
        } else if (dartResult[i] === "D") {
            tmp = tmp ** 2
            arr.push(tmp);
            tmp = 0;
        } else if (dartResult[i] === "T") {
            tmp = tmp ** 3
            arr.push(tmp);
            tmp = 0;
        } else tmp += dartResult[i];
    }
    
    return arr.reduce((acc, cur) => acc + cur, 0);
}
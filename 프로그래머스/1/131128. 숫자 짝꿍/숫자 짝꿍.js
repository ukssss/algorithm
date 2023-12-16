function solution(X, Y) {
    const arrX = X.split("");
    const arrY = Y.split("");
    const objY = {};
    let ans = '';
    
    arrX.sort((a, b) => b - a);
    arrY.forEach((y) => {
        if(objY[y] === undefined) objY[y] = 1;
        else objY[y]++;
    })
    arrX.forEach((x) => {
        if(objY[x] !== undefined && objY[x] !== 0) {
            objY[x]--;
            ans = ans.concat(x);
        }
    })
    
    if (ans === "") return "-1";
    else if (ans[0] === "0") return "0";
    else return ans;
}
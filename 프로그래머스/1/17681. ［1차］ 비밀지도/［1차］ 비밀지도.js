function solution(n, arr1, arr2) {
    const ans = [];
    arr1.forEach((arr, idx) => {
        const arrX = arr.toString(2).padStart(n, 0).replaceAll(0, " ").replaceAll(1, "#");   
        const arrY = arr2[idx].toString(2).padStart(n, 0).replaceAll(0, " ").replaceAll(1, "#");
        let tmp = '';
        for(let i = 0; i < n; i++) {
            if(arrX[i] === "#" || arrY[i] === "#") tmp += "#";
            else tmp += " ";
        }
        ans.push(tmp);
    })
    return ans;
}
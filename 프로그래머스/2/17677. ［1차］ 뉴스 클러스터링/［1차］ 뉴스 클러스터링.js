function solution(str1, str2) {
    const arr1 = [];
    const arr2 = [];
    const regex = new RegExp("^[a-zA-Z]*$");
    str1 = str1.toUpperCase();
    str2 = str2.toUpperCase();
    
    for (let i = 0; i < str1.length - 1; i++) {
        const tmp = str1.slice(i, i + 2);
        if (tmp.match(regex)) {
            arr1.push(tmp);
        }
    }
    for (let i = 0; i < str2.length - 1; i++) {
        const tmp = str2.slice(i, i + 2);
        if (tmp.match(regex)) {
            arr2.push(tmp);
        }
    }
    
    console.log(arr1);
    console.log(arr2);
    
    const max = Math.max(arr1.length, arr2.length);
    const union = [];
    const share = [];
    
    arr1.forEach((num) => {
        const idx = arr2.indexOf(num);
        if (idx !== -1) {
            share.push(num);
            arr2.splice(idx, 1);
        }
        union.push(num);
    })
    arr2.forEach((num) => {
        union.push(num);
    })
    
    console.log(union);
    console.log(share);
    
    if (union.length === 0 && share.length === 0) {
        return 65536
    } else {
        return Math.floor(share.length / union.length * 65536);
    }
}
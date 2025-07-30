function solution(s){
    let cnt = 0;
    s.split("").forEach((element) => {
        if(element === "p" || element === "P") cnt++;
        else if(element === "y" || element === "Y") cnt--;
    })
    return cnt === 0;
}
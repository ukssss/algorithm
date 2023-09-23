function solution(s) {
    const arr = s.split(" ");
    let ans = 0;
    
    arr.map((v, i)=>{
      if(v === "Z") {
          ans -= Number(arr[i-1]);
      }
        else {
            ans += Number(v); 
        }
    })
    
    return ans;
}
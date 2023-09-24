function solution(array, n) {
    array.sort((a,b)=> a-b);
    
    let differ = Math.abs(n - array[0]); 
    let ans = array[0];
    
    for(let i = 1; i < array.length; i++) {
        let temp = Math.abs(n - array[i]);
        
        if(differ > temp) {
            differ = temp;
            ans = array[i];
        }
    }
    
    return ans;
}
function solution(babbling) {
    let answer = 0;
    
    babbling = babbling.map((item) => {
        let temp = item.replaceAll('aya', '').replaceAll('ye', '').replaceAll('woo', '').replaceAll('ma', '');
        return temp === '' ? Number(item.replaceAll('aya', 1).replaceAll('ye', 2).replaceAll('woo', 3).replaceAll('ma', 4)) : item;
    })
    
    console.log(babbling);
    
    babbling.filter((item) => !isNaN(item)).map((item) => {
        let flag = true;
        let temp = String(item).split("");
        
        for(let i = 0; i < temp.length; i++) {
            flag = temp[i] === temp[i + 1] ? false : flag;
        }
        
        flag && answer++;
    });
    
    return answer;
}
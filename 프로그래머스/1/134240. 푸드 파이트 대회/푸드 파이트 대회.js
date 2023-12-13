function solution(food) {
    let arr = [];
    
    for(let i = 1; i < food.length; i++) {
        const temp = Math.floor(food[i] / 2);
        
        for(let j = 0; j < temp; j++) {
            arr.push(i);
        }
    }
    
    arr.push(0);
    
    for(let i = food.length; i > 0; i--) {
        const temp = Math.floor(food[i] / 2);
        
        for(let j = 0; j < temp; j++) {
            arr.push(i);
        }
    }
    
    return arr.join('');
}
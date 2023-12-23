function solution(numbers, hand) {
    let result = '';
    let left = "*";
    let right = "#";
    numbers.forEach((number) => {
        if (number === 1 || number === 4 || number === 7) {
            result += "L";
            left = number;
        } else if (number === 3 || number === 6 || number === 9) {
            result += "R";
            right = number;
        } else if (number === 2 || number === 5 || number === 8 || number === 0) {    
            const row = number !== 0 ? Math.ceil(number / 3) : 4;
            const col = number !== 0 ? number % 3 === 0 ? 3 : number % 3 : 2;
            let leftRow = 0;
            let leftCol = 0;
            let rightRow = 0;
            let rightCol = 0;
            
            if (left === "*") {
                leftRow = 4;
                leftCol = 1;
            } else if (left !== 0) {
                leftRow = Math.ceil(left / 3);  
                leftCol = left % 3 === 0 ? 3 : left % 3;
            } else if (left === 0) {
                leftRow = 4;
                leftCol = 2;
            }
            
            if (right === "#") {
                rightRow = 4;
                rightCol = 3;
            } else if (right !== 0) {
                rightRow = Math.ceil(right / 3);
                rightCol = right % 3 === 0 ? 3 : right % 3;
            } else if (right === 0) {
                rightRow = 4;
                rightCol = 2;
            }
            
            const leftDistance = Math.abs(row - leftRow) + Math.abs(col - leftCol);
            const rightDistance = Math.abs(row - rightRow) + Math.abs(col - rightCol);
            
            if (leftDistance < rightDistance) {
                result += "L";
                left = number;
            } else if (leftDistance > rightDistance) {
                result += "R";
                right = number;
            } else {
                if (hand === "left") {
                    result += "L";
                    left = number;
                } else if (hand === "right") {
                    result += "R";
                    right = number;
                }
            }
        }
    })
    return result;
}
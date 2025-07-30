function solution(n, words) {
    const saveWordList = [];
    let result = [0, 0];
    let saveLastWord = words[0].slice(0, 1);
    
    words.every((word, idx) => {
        if (saveWordList.includes(word)) {
            result = [idx % n + 1, Math.floor(idx / n) + 1];
            return false;
        }
        
        if (word.slice(0, 1) !== saveLastWord) {
            result = [idx % n + 1, Math.floor(idx / n) + 1];
            return false;
        }
        
        saveWordList.push(word);
        saveLastWord = word.slice(-1);
        return true;
    })
    
    return result;
}
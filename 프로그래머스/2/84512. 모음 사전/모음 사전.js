function solution(word) {
    const result = [];
    const str = '';
    for (let i = 1; i <= 5; i++) dfs(str, i, result);
    return result.sort().indexOf(word) + 1;
}

function dfs (word, length, result) {
    const AEIOU = [..."AEIOU"];
    if (length === word.length) {
        result.push(word);
        return;
    }
    AEIOU.forEach((aeiou) => {
        dfs(word + aeiou, length, result);
    })
}
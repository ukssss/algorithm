function solution(begin, target, words) {
    let queue = [begin];
    let visited = {};
    visited[begin] = 0;

    while (queue.length > 0) {
        const node = queue.shift();

        if (node === target) {
            break;
        }

        for (let word of words) {
            if (isConnected(node, word) && !visited[word]) {
                visited[word] = visited[node] + 1;
                queue.push(word);
            }
        }
    }

    return visited[target] ? visited[target] : 0;
}

function isConnected(str1, str2) {
    let cnt = 0;

    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) cnt++;
    }

    return cnt === 1 ? true : false;
}
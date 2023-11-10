function solution(answers) {
    let first = [1, 2, 3, 4, 5];
    let second = [2, 1, 2, 3, 2, 4, 2, 5];
    let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let cnt = {
        1: 0,
        2: 0,
        3: 0,
    };

    for (let num of answers) {
        if (num === first[0]) {
            cnt[1]++;
        }
        if (num === second[0]) {
            cnt[2]++;
        }
        if (num === third[0]) {
            cnt[3]++;
        }

        let firstTemp = first.shift();
        let secondTemp = second.shift();
        let thirdTemp = third.shift();

        first.push(firstTemp);
        second.push(secondTemp);
        third.push(thirdTemp);
    }

    let max = Math.max(cnt[1], cnt[2], cnt[3]);
    let ans = [];
    Object.keys(cnt).find((key) => {
        if (cnt[key] === max) {
            ans.push(key);
        }
    });

    return ans.map(Number);
}
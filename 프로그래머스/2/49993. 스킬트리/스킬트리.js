function solution(skill, skill_trees) {
    let cnt = 0;
    skill_trees.forEach((tree) => {
        const q = [...skill.split("")];
        let check = true;
        for (let i = 0; i < tree.length; i++) {
            const tmp = tree[i];
            if (!q.includes(tmp)) continue;
            else {
                if (tmp === q[0]) {
                    q.shift();
                } else {
                    check = false;
                }
            }
        }
        if (check) cnt++;
    })
    return cnt;
}
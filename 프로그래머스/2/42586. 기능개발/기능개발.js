function solution(progresses, speeds) {
    const ans = [];
    const todos = progresses.length;
    let total = 0;

    while (progresses.length) {
        let cnt = 0;

        for (let i = 0; i < progresses.length; i++) {
            const progress = progresses[i];
            const speed = speeds[i];
            const current = progress + speed;
            progresses[i] = current;
        }

        while (progresses.length) {
            if (progresses[0] >= 100) {
                progresses.shift();
                speeds.shift();
                cnt++;
            } else {
                break;
            }
        }

        if (cnt) {
            ans.push(cnt);
        }

        total = ans.reduce((acc, cur) => acc + cur, 0);

        if (total === todos) {
            return ans;
        }
    }
}
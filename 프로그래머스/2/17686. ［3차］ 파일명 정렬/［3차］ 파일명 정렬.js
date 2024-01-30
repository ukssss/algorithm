function solution(files) {
    const arr = [];

    for (let i = 0; i < files.length; i++) {
        for (let j = 0; j < files[i].length; j++) {
            if (j === 0) {
                arr.push({ HEAD: files[i][0], NUMBER: '', TAIL: '' });
            } else if (
                (files[i][j].charCodeAt() < 48 || files[i][j].charCodeAt() > 57) &&
                arr[i]['NUMBER'] === ''
            ) {
                arr[i]['HEAD'] += files[i][j];
            } else if (
                files[i][j].charCodeAt() >= 48 &&
                files[i][j].charCodeAt() <= 57 &&
                arr[i]['TAIL'] === ''
            ) {
                arr[i]['NUMBER'] += files[i][j];
            } else {
                arr[i]['TAIL'] += files[i][j];
            }
        }
    }

    arr.sort((a, b) => {
        let xh = a.HEAD.toLowerCase();
        let yh = b.HEAD.toLowerCase();
        let xn = Number(a.NUMBER);
        let yn = Number(b.NUMBER);

        if (xh < yh) {
            return -1;
        } else if (xh > yh) {
            return 1;
        } else {
            if (xn < yn) {
                return -1;
            } else if (xn > yn) {
                return 1;
            }
        }
        return 0;
    });

    return arr.map((v) => v.HEAD + v.NUMBER + v.TAIL);
}
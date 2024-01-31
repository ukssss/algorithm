function solution(m, n, board) {
    board = board.map((v) => v.split(''));

    while (true) {
        const blocks = [];
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                if (
                    board[i][j] &&
                    board[i][j] === board[i + 1][j] &&
                    board[i][j] === board[i][j + 1] &&
                    board[i][j] === board[i + 1][j + 1]
                ) {
                    blocks.push([i, j]);
                }
            }
        }

        if (!blocks.length) {
            return [].concat(...board).filter((x) => !x).length;
        }

        for (let numbers of blocks) {
            let [i, j] = numbers;
            board[i][j] = 0;
            board[i + 1][j] = 0;
            board[i][j + 1] = 0;
            board[i + 1][j + 1] = 0;
        }

        for (let i = m - 1; i > 0; i--) {
            if (!board[i].some((v) => !v)) continue;

            for (let j = 0; j < n; j++) {
                for (let k = i - 1; k >= 0 && !board[i][j]; k--) {
                    if (board[k][j]) {
                        board[i][j] = board[k][j];
                        board[k][j] = 0;
                        break;
                    }
                }
            }
        }
    }
}
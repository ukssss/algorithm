function solution(board) {
    let answer = 0;
    const row = board.length;
    const col = board[0].length;

    if (row <= 1 || col <= 1) return 1;

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (board[i][j] > 0) {
                const up = board[i - 1][j];
                const left = board[i][j - 1];
                const cross = board[i - 1][j - 1];
                const size = Math.min(up, left, cross);
                board[i][j] = size + 1;
                answer = Math.max(answer, board[i][j]);
            }
        }
    }

    return answer ** 2;
}
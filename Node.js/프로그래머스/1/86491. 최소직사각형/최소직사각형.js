function solution(sizes) {
    sizes = sizes.map((size) => (size[0] > size[1] ? [size[0], size[1]] : [size[1], size[0]]));
    let rowMax = 0;
    let colMax = 0;

    for (let [row, col] of sizes) {
        rowMax = Math.max(rowMax, row);
        colMax = Math.max(colMax, col);
    }

    return rowMax * colMax;
}
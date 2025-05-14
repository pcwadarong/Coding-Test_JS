const [N, ...lines] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const n = +N;
const grid = lines.map(line => line.split(' ').map(Number))
const colorCount = {
    white: 0,
    blue: 0
}

function divide(x, y, size){
    const color = grid[y][x];
    let isSame = true;

    for (let i = y; i < y + size; i++) {
        for (let j = x; j < x + size; j++) {
            if (grid[i][j] !== color) isSame = false;
        }
    }

    if (isSame) color === 0 ? colorCount.white++ : colorCount.blue++;
    else {
        const half = size / 2;
        divide(x, y, half);
        divide(x + half, y, half);
        divide(x, y + half, half);
        divide(x + half, y + half, half);
    }
}

divide(0, 0, n);

console.log(colorCount.white);
console.log(colorCount.blue);
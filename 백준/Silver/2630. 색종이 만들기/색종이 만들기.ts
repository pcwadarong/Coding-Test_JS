const [N, ...lines] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const n = +N;
const grid = Array.from({ length: n }, () => Array(n).fill(0));
let white = 0;
let blue = 0;

for (let i = 0; i < n; i++){
    for (let j = 0; j < n; j++){
        const line = lines[i].trim().split(' ').map(Number);
        grid[i][j] = line[j];
    }
}

function isSame(x, y, size){
    const color = grid[y][x];
   for (let i = y; i < y + size; i++) {
        for (let j = x; j < x + size; j++) {
            if (grid[i][j] !== color) return false;
        }
    }

    return true;
}

function divide(x, y, size){
    if (isSame(x, y, size)){
        const color = grid[y][x];
        color === 0 ? white++ : blue++;
        return;
    }

    const half = size / 2;
    divide(x, y, half);
    divide(x + half, y, half);
    divide(x, y + half, half);
    divide(x + half, y + half, half);
}

divide(0, 0, n);

console.log(white);
console.log(blue);
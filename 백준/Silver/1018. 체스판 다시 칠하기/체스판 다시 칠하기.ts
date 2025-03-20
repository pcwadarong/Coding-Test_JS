const [size, ...chess] = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString().trim().split(/\r?\n/);
const [N, M] = size.split(' ').map(Number);
let minimum = Infinity;

// 기준 패턴 정의
const whiteStart = ['WBWBWBWB', 'BWBWBWBW'];
const blackStart = ['BWBWBWBW', 'WBWBWBWB'];

for (let i = 0; i <= N-8; i++){ 
    for (let j = 0; j <= M-8; j++){
        let countWhite = 0;
        let countBlack = 0;
        
        for (let x = 0; x < 8; x++) {
            for (let y = 0; y < 8; y++) {
                const square = chess[i + x][j + y];
                if (square !== whiteStart[x % 2][y]) countWhite++;
                if (square !== blackStart[x % 2][y]) countBlack++; 
            }
        }
        minimum = Math.min(minimum, countWhite, countBlack);
    }
}

console.log(minimum);

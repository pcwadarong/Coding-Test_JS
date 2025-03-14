let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [N_Size, M_Size] = input[0].split(' ').map(Number);

const A = input.slice(1, N_Size + 1).map(line=> line.split(' ').map(Number));
const B = input.slice(N_Size + 1).map(line=> line.split(' ').map(Number));

const result = A.map((row, i) => row.map((val, j) => val + B[i][j]).join(' '))
console.log(result.join('\n'));
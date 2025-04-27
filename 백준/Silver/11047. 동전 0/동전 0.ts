const [conditions, ...A] = require('fs').readFileSync("/dev/stdin").toString().trim().split(/\r?\n/);
const [N, K] = conditions.split(' ').map(Number);
const arr = A.map(Number).filter(e => e <= K).reverse();

let result = 0;
let remain = K;
let i = 0;

while (remain > 0 && i < arr.length) {
    const coin = arr[i];
    result += Math.floor(remain / coin);
    remain = remain % coin;
    i++;
}

console.log(result);
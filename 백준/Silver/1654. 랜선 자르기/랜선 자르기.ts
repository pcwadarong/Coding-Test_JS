const [condition, ...lines] = require('fs').readFileSync("/dev/stdin").toString().trim().split(/\r?\n/);
const [K, N] = condition.split(' ').map(Number); 

let left = 1;
let right = Math.max(...lines);
let answer = 0;

while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const count = lines.reduce((sum, len) => sum + Math.floor(len / mid), 0);

    if (count >= N) {
        answer = mid;
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}

console.log(answer);

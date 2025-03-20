const [irr, ...arr] = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString().trim().split(/\r?\n/).map(Number);
let count = 0;

for (let i = 0; i < irr; i++){
    count = (i === irr - 1) ? (count + arr[i]) : (count + arr[i] -1);
}

console.log(count);
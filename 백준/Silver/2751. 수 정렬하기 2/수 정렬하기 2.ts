const input = require('fs')
.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
.toString().trim().split('\n').map(Number);

const answer = input.slice(1).sort((a, b) => a - b);
console.log(answer.join('\n'))
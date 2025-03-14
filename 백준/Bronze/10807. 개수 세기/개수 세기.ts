const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
.toString().trim().split("\n");

const v = Number(input[2]);
const arr = input[1].split(' ').map(Number);

const answer = arr.filter(el => el === v);
console.log(answer.length);
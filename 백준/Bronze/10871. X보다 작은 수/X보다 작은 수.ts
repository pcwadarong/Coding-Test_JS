const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
.toString().trim().split("\n");
const x = Number(input.shift().split(' ')[1]);
const a = input[0].split(" ").map(Number);
const answer = a.filter(num => num < x);

console.log(answer.join(' '));
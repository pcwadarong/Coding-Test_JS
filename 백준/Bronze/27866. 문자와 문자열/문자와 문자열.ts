let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num = Number(input[1]);
const word = Array.from(input[0]);

console.log(String(word.splice(num - 1, 1)))
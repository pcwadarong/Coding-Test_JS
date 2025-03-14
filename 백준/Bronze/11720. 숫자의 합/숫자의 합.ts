let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = [...input[1]].map(Number);
let sum = arr.reduce((acc, cur)=> acc + cur, 0)
console.log(sum);
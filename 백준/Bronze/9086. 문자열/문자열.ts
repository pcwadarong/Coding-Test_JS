let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();
const result = input.map((row)=> row.slice(0, 1) + row.slice(-1));
console.log(result.join('\n'));
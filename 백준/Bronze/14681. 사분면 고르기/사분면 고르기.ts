const input = require('fs').readFileSync(0).toString().trim().split("\n");
const x = Number(input[0]);
const y = Number(input[1]);
console.log(x > 0 ? (y > 0 ? 1 : 4) : (y > 0 ? 2 : 3));
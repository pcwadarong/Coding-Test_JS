let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);

const capacity = 30;
let arr = new Array(capacity).fill('').map((_, i) => i+1);

let missing = arr.filter(student => !input.includes(student));

console.log(missing[0]);
console.log(missing[1]);
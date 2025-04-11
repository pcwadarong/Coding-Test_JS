const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [irr, ...arr] = input;
const result = arr.sort((a:string, b:string) => Number(a.split(' ')[1]) - Number(b.split(' ')[1]) ||  Number(a.split(' ')[0]) - Number(b.split(' ')[0]));
console.log(result.join('\n'));
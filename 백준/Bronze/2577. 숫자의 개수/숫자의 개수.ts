let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const arr = new Array(10).fill(0);
const sum = String(Number(input[0])*Number(input[1])*Number(input[2])).split('');
for(let num of sum){
    arr[num]++;
}
console.log(arr.join('\n'))
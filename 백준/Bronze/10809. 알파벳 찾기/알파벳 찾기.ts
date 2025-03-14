let input = require('fs').readFileSync('/dev/stdin').toString().trim();

const arr:Array<number> = new Array(26).fill(-1);

for (let char of input){
    arr[char.charCodeAt(0) - 'a'.charCodeAt(0)] = input.indexOf(char);
}

console.log(arr.join(' '));
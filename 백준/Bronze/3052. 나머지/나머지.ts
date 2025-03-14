let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let set = new Set();

for (const element of input){
    set.add(element % 42);
}

console.log(set.size);
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const num = Number(input[0]);
let result = 1;

if (num === 0){
    console.log(result);
} else {
    for(let i = num; i>0; i--){
        result *= i;
    }
    console.log(result)
}
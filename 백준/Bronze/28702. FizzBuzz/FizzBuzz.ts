const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split('\n');
input

let resultNum = 0;
let result;

for (let i=0; i<3; i++){
    if (Number(input[i])) {
        resultNum= Number(input[i]) + 3-i;
        break;
    }
}

if (resultNum % 3 === 0){
    if (resultNum % 5 === 0) result = 'FizzBuzz'
    else result = 'Fizz'
} else if (resultNum % 5 === 0) result = 'Buzz';
else result = resultNum;

console.log(result);
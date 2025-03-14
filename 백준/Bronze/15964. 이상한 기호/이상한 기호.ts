let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const Operator = (num1:number, num2:number) => {
    return (num1+num2)*(num1-num2);
}

console.log(Operator(input[0], input[1]));
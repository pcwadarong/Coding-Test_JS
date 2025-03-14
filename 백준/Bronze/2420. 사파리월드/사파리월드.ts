const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const num1 = Number(input[0]);
const num2 = Number(input[1]);

console.log(Math.abs(num1 - num2));
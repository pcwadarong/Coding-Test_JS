const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const Year = Number(input[0]);

const isLeapYear = (year: number): number => {
    return (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) ? 1 : 0;
};

console.log(isLeapYear(Year));
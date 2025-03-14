const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const point = Number(input[0]);

if (point >= 90){
    console.log('A');
} else if (point >= 80){
    console.log('B')
} else if (point >= 70){
    console.log('C')
} else if (point>= 60){
    console.log('D')
} else {
    console.log('F')
}
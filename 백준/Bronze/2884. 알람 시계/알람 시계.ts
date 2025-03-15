let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const hour = input[0];
const minutes = input[1];

let finalHour = minutes >= 45 ? hour : hour - 1;
let finalMinutes = minutes > 45 ? minutes - 45 : minutes === 45 ? 0 : minutes + 60 - 45;

if (finalHour < 0) finalHour = finalHour + 24;
 
console.log(`${finalHour} ${finalMinutes}`)
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const hour = input[0];
const minutes = input[1];

let finalHour = hour;
let finalMinutes = minutes >= 45 ? minutes - 45 : minutes + 60 - 45;

if (minutes < 45) finalHour = hour === 0 ? 23 : hour - 1;
 
console.log(`${finalHour} ${finalMinutes}`)
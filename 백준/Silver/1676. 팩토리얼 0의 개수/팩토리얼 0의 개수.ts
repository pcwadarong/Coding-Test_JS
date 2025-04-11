const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
let result = 0;
let divisor = 5;

while (input >= divisor) {
    result += Math.floor(input / divisor);
    divisor *= 5;
  }
  
  console.log(result);
let input = require('fs').readFileSync('/dev/stdin').toString().trim();

const count = Number(input);
for (let i=1; i<=count; i++){
    console.log('*'.repeat(i).padStart(count))
}
const fs = require('fs');
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());
for (let i=1; i<=input; i++){
    console.log('*'.repeat(i))
}
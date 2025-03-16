const input = require('fs')
.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
.toString().trim().split(' ').map(Number);

const [M, N] = input;
const arr:number[] = [];

for (let i=M; i<=N; i++){
    if (i === 1) continue;
    if (i <= 3) arr.push(i);
    else {
        let isPrime = true;
        for (let j=2; j<=Math.sqrt(i); j++){
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if(isPrime) arr.push(i);
    }
}

console.log(arr.join('\n'));
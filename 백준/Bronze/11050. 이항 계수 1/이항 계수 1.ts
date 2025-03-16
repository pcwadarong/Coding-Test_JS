const input = require('fs')
.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
.toString().trim().split(' ').map(Number);

// 이항계수란? N개 중에 K개를 고르는 경우의 수
// 5개 중 3개 -> (5가지 X 4가지 x 3가지)/(중복: 3가지 x 2가지 x 1가지)
const N = input[0];
const K = input[1];

const factorial = (n: number): number => {
    let result = 1;
    for (let i=2; i<=n; i++){
        result *= i;
    }
    return result;    
}

const answer = factorial(N)/(factorial(K)*factorial(N-K));
console.log(answer);
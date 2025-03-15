const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const [a, b] = input;

// 유클리드 호제법: 최대공약수 구하기, 값 교환(Swap) 방법 사용
// a에 b를 넣고, b에 a%b를 넣어서 계속해서 수를 줄이다가 최종적으로 b = 0, a의 값이 gcd
const findGcd = (a: number, b: number): number => {
    while (b !== 0) {
        [a, b] = [b, a % b];  
    }
    return a;
};

const gcd = findGcd(a, b);

// 최대공배수란? 두 수의 곱을 가장 큰 약수로 나눈 값
const lcm = (a * b) / gcd;

console.log(gcd);
console.log(lcm);

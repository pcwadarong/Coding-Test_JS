const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const [a, b] = input;

const findPrimeFactors = (num:number): number[] => {
    const primes: number[] = [1];
    for (let i = 2; i <= num; i++){
        while (num % i === 0){
            primes.push(i);
            num = num/i;
        }
    }
    return primes;
}

const findLargestCommonDivisor = (a: number[], b: number[]): number => {
    let gcd = 1;
    const tempA = [...a];
    const tempB = [...b];

    while (tempA.length > 0 && tempB.length > 0) {
        if (tempA[0] === tempB[0]) {
            gcd *= tempA.shift()!;
            tempB.shift();
        } else if (tempA[0] < tempB[0]) {
            tempA.shift();
        } else {
            tempB.shift();
        }
    }

    return gcd;
}

const findGreatestCommonMultiple = (a: number[], b: number[]) => {
    let lcm = 1;
    const tempA = [...a];
    const tempB = [...b];

    while (tempA.length > 0 || tempB.length > 0){
        if (tempA.length === 0 || (tempB.length > 0 && tempA[0] > tempB[0])) {
            lcm*=tempB.shift()!
        } else if (tempB.length === 0 || tempA[0] < tempB[0]) {
            lcm*=tempA.shift()!
        } else { //tempA[0] === tempB[0]
            lcm*=tempA.shift()!
            tempB.shift();
        }
    }
    return lcm;
}

const divisorA = findPrimeFactors(a);
const divisorB = findPrimeFactors(b);
const lcd = findLargestCommonDivisor(divisorA, divisorB);
const gcm = findGreatestCommonMultiple(divisorA, divisorB);

console.log(lcd);
console.log(gcm);

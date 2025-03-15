const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const [a, b] = input;
const primeA = [1];
const primeB = [1];

const findPrimeFactors = (num:number, primes: Array<number>) => {
    for (let i = 2; i <= num; i++){
        while (num % i === 0){
            primes.push(i);
            num = num/i;
        }
    }
    return primes;
}

const findLargestCommonDivisor = (a: number[], b: number[]) => {
    const commonDivisors: number[] = [];

    const tempA = [...a];
    const tempB = [...b];

    while (tempA.length > 0 && tempB.length > 0) {
        if (tempA[0] === tempB[0]) {
            commonDivisors.push(tempA.shift()!);
            tempB.shift();
        } else if (tempA[0] < tempB[0]) {
            tempA.shift();
        } else {
            tempB.shift();
        }
    }

    return commonDivisors.reduce((acc, cur) => acc * cur, 1)
}

const findGreatestCommonMultiple = (a: number[], b: number[]) => {
    const combinedDivisors: number[] = [];

    const tempA = [...a];
    const tempB = [...b];

    while (tempA.length > 0 || tempB.length > 0){
        if (tempA.length === 0) {
            combinedDivisors.push(tempB.shift()!);
        } else if (tempB.length === 0) {
            combinedDivisors.push(tempA.shift()!);
        } else if (tempA[0] === tempB[0]) {
            combinedDivisors.push(tempA.shift()!);
            tempB.shift();
        } else if (tempA[0] < tempB[0]) {
            combinedDivisors.push(tempA.shift()!);
        } else {
            combinedDivisors.push(tempB.shift()!);
        }
    }
    return combinedDivisors.reduce((acc, cur) => acc * cur, 1)
}

const divisorA = findPrimeFactors(a, primeA);
const divisorB = findPrimeFactors(b, primeB);
const lcd = findLargestCommonDivisor(divisorA, divisorB);
const gcm = findGreatestCommonMultiple(divisorA, divisorB);

console.log(`${lcd}
${gcm}`);
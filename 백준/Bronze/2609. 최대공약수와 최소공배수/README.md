# [Bronze I] 최대공약수와 최소공배수 - 2609 

[문제 링크](https://www.acmicpc.net/problem/2609) 

### 성능 요약

메모리: 9592 KB, 시간: 100 ms

### 분류

유클리드 호제법, 수학, 정수론

### 제출 일자

2025년 3월 16일 03:48:01

## 📌 문제
두 개의 자연수를 입력받아 최대 공약수와 최소 공배수를 출력하는 프로그램을 작성하시오. <br/>
첫째 줄에는 두 개의 자연수가 주어진다. 이 둘은 10,000이하의 자연수이며 사이에 한 칸의 공백이 주어진다. <br/>
첫째 줄에는 입력으로 주어진 두 수의 최대공약수를, 둘째 줄에는 입력으로 주어진 두 수의 최소 공배수를 출력한다.

| 입력 |	출력 |
|  -  |   -  |
24 18 | 6 72 |

---

## 💻 solution 1

```ts
const input = require('fs').readFileSync('/dev/stdin')
.toString().trim().split(' ').map(Number);
const [a, b] = input;

const findGcd = (a: number, b: number): number => {
    while (b !== 0) {
        [a, b] = [b, a % b];  
    }
    return a;
};

const gcd = findGcd(a, b);
const lcm = (a * b) / gcd;

console.log(gcd);
console.log(lcm);
```

### 최대공약수(GCD) 구하기: 유클리드 호제법
* gcd = greatest common divisor

유클리드(Euclid)에 의해 기원전 300년경에 발견된 가장 오래된 알고리즘이다.
> **❓ 호제법이란?** 두 수가 서로 상대방 수를 나누어서 결국 원하는 수를 얻는 알고리즘

값 교환(Swap) 방법을 사용하여, b가 0이 되고 a가 최대 공약수가 될 때까지, a에는 b의 값을, b에는 a/b의 나머지 값을 대입한다. <br/>
a가 24, b가 18일 경우, 1: a=18, b=6 / 2: a=6, b=0 이기 때문에 최대 공약수는 6이 된다.

### 최대공배수(LCM) 구하기
* lcm = largest common multiple

두 수의 곱을 가장 큰 약수로 나눈 값이 최대공배수이다.
예를 들어, `24*18/6=72`이다.

---
## 💻 solution2
조금 더 복잡하지만 정석적인 방법으로, 소인소분해를 통하여 구할 수 있다.

```ts
const input = require('fs').readFileSync('/dev/stdin')
.toString().trim().split(' ').map(Number);
const [a, b] = input;

// num을 소인수분해하는 함수
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

// 최대공약수를 찾는 함수
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

// 최소공배수를 찾는 함수
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
```
우선 각각의 수를 먼저 소인수분해해야 한다. 1은 소인수가 아니므로 2부터 시작하여 각 `num`이 될 때까지, 각 `num`이 `i`로 나누어 떨어진다면 소인수 배열에 추가하고 `i`로 나눠서 최종적으로 `num`이 더 이상 약분되지 않을 때까지 반복한다.

### 최대공약수 구하기
두 수를 소인수분해하여 공통으로 등장하는 소인수만 남긴 후, 각 소인수가 두 수에서 등장하는 횟수(지수) 중에서 더 적게 나온 횟수만큼 곱하면, 최대공약수가 된다. <br/>
예를 들어, `a=[1, 2, 2, 3, 3, 5]`, `b=[1, 2, 3, 3, 7]` 일 경우, 공통된 소인수는 `1, 2, 3`이고, 최대 공약수는 `1 * 2 * 3 * 3 = 18`이 된다.

따라서 배열 `divisorA`, `divisorB` 중 하나가 0이 될때까지 아래의 과정을 반복한다. <br/>
`gcd`를 1로 설정한 후, `a[0]`, `b[0]`부터 공통된 수일 경우에만 `gcd`에 곱한 후 `shift`로 배열에서 삭제한다.

### 최소공배수 구하기
각 수를 소인수분해하여 공통인 소인수 중에 지수가 같은 것은 그대로, 다른 것은 지수가 큰 것을 택하고, 공통이 아닌 소인수는 모두 택하여 곱하면 최소공배수가 된다. <br/>
예를 들어 `a=[1, 2, 2, 3, 3, 5]`, `b=[1, 2, 3, 3, 7]` 일 경우, 지수가 같은 것은 `1, 3*3`, 다른 것은 `2, 3`인데 그 중 `2*2`을 남기고, 공통이 아닌 소인수는 `5, 7`이므로 최소 공배수는 `1 * 2 * 2 * 3 * 3 * 5 * 7 = 1260`이 된다.

따라서 배열 `divisorA`, `divisorB` 가 둘 다 없어질 때까지 아래의 과정을 반복한다.

`lcm`을 1로 설정한 후,

1. **공통인 소인수**: `a[0]`가 `b[0]`와 같을 경우 lcm에 곱하고 각 배열에서 삭제한다.

2. **공통인 소인수 중 지수가 달라 남은 것**: `a[0] > b[0]`일 경우 `b[0]`을 lcm에 곱하고 삭제한다. 반대의 경우 반대로 한다. -> `[x, y]`, `[x, x, y]` 일 경우 공통된 `x` 한 개가 각각 삭제되고, 두 번째 배열의 `x`만 남은 상태이므로 두 번째 배열의 `x`를 추가로 곱해야 한다.

3. **공통이 아닌 소인수**: 여러 차례 과정 1,2를 반복하여 한 배열이 사라졌을 경우, 상대 배열엔 공통이 아닌 소인수만 남아있으므로 모두 lcm에 곱한 후 반복문을 종료한다.

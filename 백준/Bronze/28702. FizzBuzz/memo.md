## FizzBuzz 문제 - 다음 출력 예측하기

### 🧩 문제 해석
고전적인 FizzBuzz 문제는 다음 규칙에 따라 1부터 시작하는 수열을 출력합니다.
- 3의 배수: "Fizz"
- 5의 배수: "Buzz"
- 3과 5의 공배수: "FizzBuzz"
- 그 외: 숫자 그대로 출력

이 문제에서는 FizzBuzz 출력 결과의 **세 문자열이 주어지고**, 그 **다음에 출력될 문자열**을 구해야 합니다.

입력은 항상 **연속된 세 개의 FizzBuzz 출력 문자열**이고, 다음에 나올 값은 항상 유일하다고 보장됩니다.

---

## ✅ 첫 번째 풀이: 내 초기 코드 (숫자를 기준으로 계산)

```ts
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let resultNum = 0;
let result;

for (let i = 0; i < 3; i++) {
  if (Number(input[i])) {
    resultNum = Number(input[i]) + (3 - i);
    break;
  }
}

if (resultNum % 3 === 0 && resultNum % 5 === 0) result = 'FizzBuzz'
else if (resultNum % 3 === 0) result = 'Fizz'
else if (resultNum % 5 === 0) result = 'Buzz';
else result = resultNum;

console.log(result);
```

### 📌 특징
- 입력 중 숫자가 있는 경우를 기준점으로 활용
- 단 3번의 탐색으로 결과 계산 가능
- 단점: 입력이 모두 문자열(Fizz/Buzz/FizzBuzz)이면 작동 불가

---

## ✅ 두 번째 풀이: 일반화된 FizzBuzz 탐색

```ts
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function getFizzBuzz(n: number): string {
  if (n % 15 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n.toString();
}

let i = 1;
while (true) {
  if (
    getFizzBuzz(i) === input[0] &&
    getFizzBuzz(i + 1) === input[1] &&
    getFizzBuzz(i + 2) === input[2]
  ) {
    console.log(getFizzBuzz(i + 3));
    break;
  }
  i++;
}
```

### 📌 특징
- 입력이 모두 문자열이어도 대응 가능
- FizzBuzz 로직을 일반화
- 단점: 성능은 숫자가 매우 클 경우 느려질 수 있음

---

## ✅ 세 번째 풀이: 커스텀 Fizz/Buzz 기준 (예: 2, 7)

```ts
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// 첫째 줄은 fizzNum, 둘째 줄은 buzzNum / 이어지는 3-5번째 줄은 연속되는 세 입력이라고 가정했을 때,
const [ fizz, buzz, ...arr ] = input;
const fizzNum = Number(fizz);
const buzzNum = Number(buzz);

//Lcm을 구하기 위해 최대 공약수 구하기
const findGcd = (a: number, b: number) => {
    while (b !== 0) [a, b] = [b, a % b];
    return a;
}

const gcd = findGcd(fizz, buzz);
const lcm = fizz * buzz / gcd;

function getFizzBuzz(n: number, fizz: number, buzz: number): string {
    if (n % lcm === 0) return 'FizzBuzz';
    if (n % fizz === 0) return 'Fizz';
    if (n % buzz === 0) return 'Buzz';
    return n.toString();
}

let i = 1;
while (true) {
    if (
        getFizzBuzz(i, fizzNum, buzzNum) === arr[0] &&
        getFizzBuzz(i + 1, fizzNum, buzzNum) === arr[1] &&
        getFizzBuzz(i + 2, fizzNum, buzzNum) === arr[2]
    ) {
      console.log(getFizzBuzz(i + 3, fizzNum, buzzNum));
      break;
    }
    i++;
}
```

### 📌 특징
- `fizz`, `buzz` 기준을 외부에서 주입 가능
- FizzBuzz를 확장 가능한 구조로 일반화함

---

## 📊 비교 요약

| 항목 | 첫 번째 풀이 | 두 번째 풀이 | 세 번째 풀이 |
|------|----------------|------------------|------------------|
| 핵심 전략 | 숫자 기준 오프셋 계산 | i = 1부터 시뮬레이션 | 사용자 기준값 기반 시뮬레이션 |
| 커버 범위 | 숫자 포함 시만 작동 | 항상 작동 | 항상 작동 + 유연함 |
| 실행 속도 | 매우 빠름 | 중간 (최악 O(N)) | 중간 (최악 O(N)) |
| 일반화 가능성 | 낮음 | 중간 | 높음 (재사용성 있음) |

---

## 🧠 결론
- **정답 보장 + 숫자 포함 시**는 첫 번째 풀이가 가장 빠름
- **입력이 문자열만 올 수 있는 경우**를 고려하면 두 번째 또는 세 번째 풀이 필요
- **기준 수가 유동적인 문제**라면 세 번째 풀이처럼 확장 가능한 방식이 바람직함


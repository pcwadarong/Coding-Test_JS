### 📌 문제 설명

* 정수 `N`이 주어졌을 때, 다음 세 가지 연산을 통해 1을 만들고자 한다.

  1. `X % 3 === 0`이면 `X / 3`
  2. `X % 2 === 0`이면 `X / 2`
  3. `X - 1`
* 가능한 연산을 이용해 **최소한의 횟수로 `N → 1`로 만드는 방법**을 구하는 문제
* 제한: `1 ≤ N ≤ 1,000,000`

---

### 🧠 문제 해결 과정

1. **재귀적 사고방식으로 시작**

   * 어떤 수 `n`이 있을 때, 가능한 연산은 `n - 1`, `n / 2`, `n / 3`
   * 각각의 연산을 재귀적으로 적용하며, 최소 연산 횟수를 구하고자 함
   * 예를 들어 `cal(n - 1)`은 항상 가능하고, 나머지는 조건부 가능
   * `candidates`라는 배열을 만들어서 가능한 결과들을 넣고 `Math.min(...candidates)`로 최소값을 구함

   ```ts
   let candidates = [cal(n - 1)];
   if (n % 2 === 0) candidates.push(cal(n / 2));
   if (n % 3 === 0) candidates.push(cal(n / 3));
   const min = Math.min(...candidates) + 1;
   ```

   * 여기서 `[cal(n - 1)]`처럼 대괄호로 감싸면 "`cal(n - 1)`의 결과를 배열로 만들겠다"는 의미
   * 이후 조건에 맞는 연산 결과들을 `.push()`해서 후보군을 완성하고 최솟값을 선택

2. **메모이제이션 적용**

   * 이미 계산된 값은 저장해서 다시 계산하지 않도록 함
   * `Map<number, number>`를 사용하여 중복 계산을 방지

---

### ❌ 재귀 + 메모이제이션 방식 (Top-Down)

```ts
const memo = new Map<number, number>();

function cal(n: number): number {
  if (n === 1) return 0;
  if (memo.has(n)) return memo.get(n)!;

  let candidates = [cal(n - 1)];
  if (n % 2 === 0) candidates.push(cal(n / 2));
  if (n % 3 === 0) candidates.push(cal(n / 3));

  const min = Math.min(...candidates) + 1;
  memo.set(n, min);
  return min;
}

const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
console.log(cal(n));
```

#### 📉 단점

* 호출 깊이가 깊어질 수 있어 **JS 환경에서는 스택 초과 또는 시간 초과 위험**

---

### ✅ 반복문 DP 방식 (Bottom-Up)

```ts
const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
const dp: number[] = Array(n + 1).fill(0);

for (let i = 2; i <= n; i++) {
  // 기본적으로 -1 연산을 수행한 경우
  dp[i] = dp[i - 1] + 1;

  // 2로 나누어 떨어지면, 나누는 경우와 기존 값을 비교해 더 작은 값 선택
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }

  // 3으로 나누어 떨어지면, 마찬가지로 최소 연산 선택
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }
}

console.log(dp[n]);
```

#### ✅ 설명

* `dp[i] = dp[i - 1] + 1`: 기본적으로는 -1 연산만 가정했을 때의 최소 연산 수
* `if (i % 2 === 0)`: 2로 나누어 떨어지면 `i / 2`에서 오는 경로도 고려
* `if (i % 3 === 0)`: 3으로 나누어 떨어지면 `i / 3`에서 오는 경로도 고려
* 세 경로 중 **가장 적은 연산 횟수 + 1**을 현재 값에 저장

---

### 🧠 두 방식 비교

| 항목  | 재귀 + memo (Top-down) | 반복문 DP (Bottom-up) |
| --- | -------------------- | ------------------ |
| 구조  | 깊은 재귀 호출             | 순차적인 반복문           |
| 성능  | 느릴 수 있음              | 빠르고 안정적            |
| 안정성 | ❌ 스택 초과 가능           | ✅ 안전함              |
| 직관성 | 코드 흐름은 이해 쉬움         | 구현 간단하고 효율적        |

---

### ✅ 결론

> 이 문제는 수가 클수록 반복 연산이 많아지고, 호출 경로도 다양하므로 재귀보다는 반복문 기반의 Bottom-up DP가 훨씬 더 적합하다. 특히 자바스크립트처럼 재귀 최적화가 약한 환경에서는 반드시 반복문 방식으로 풀어야 시간 초과를 피할 수 있다.

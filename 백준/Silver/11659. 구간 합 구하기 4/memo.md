## 구간 합 구하기 방식 비교: 반복문 vs 누적합(Prefix Sum)

배열에서 특정 구간의 합을 구하는 방식에는 대표적으로 두 가지가 있습니다:

1. **반복문을 통해 직접 덧셈하는 방식**
2. **누적합 배열(Prefix Sum)을 이용해 상수 시간에 계산하는 방식**

---

### ✅ 1. 반복문 방식

```ts
const [meta, numbers, ...queries] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const nums = numbers.split(' ').map(Number);
const result: number[] = [];

for (let item of queries) {
  let sum = 0;
  const [start, end] = item.split(' ').map(Number);
  for (let i = start - 1; i < end; i++) {
    sum += nums[i];
  }
  result.push(sum);
}

console.log(result.join('\n'));
```

#### 📌 특징

* 각 쿼리마다 **start\~end 범위를 순회하면서 직접 합산**
* 시간복잡도: **O(Q × N)**  (Q: 쿼리 수, N: 배열 길이)
* 간단하고 직관적이지만, **쿼리 수가 많을수록 느림**

---

### ✅ 2. 누적합(Prefix Sum) 방식

```ts
const [meta, numbers, ...queries] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const nums = numbers.split(' ').map(Number);

const prefixSum = [0];
for (let i = 0; i < nums.length; i++) {
  prefixSum[i + 1] = prefixSum[i] + nums[i];
}

const result = queries.map(query => {
  const [start, end] = query.split(' ').map(Number);
  return prefixSum[end] - prefixSum[start - 1];
});

console.log(result.join('\n'));
```

#### 📌 특징

* **사전 처리**를 통해 `prefixSum[i] = nums[0] + ... + nums[i-1]`를 저장
* 각 쿼리는 `prefixSum[end] - prefixSum[start - 1]`로 O(1)에 계산 가능
* 시간복잡도: **O(N + Q)** (배열 처리 + 쿼리 계산)
* 쿼리가 많을수록 유리하며, 효율적임

---

### ⏱️ 시간복잡도 비교

| 방식     | 전처리 시간 | 쿼리당 계산 | 전체 시간복잡도 |
| ------ | ------ | ------ | -------- |
| 반복문    | 없음     | O(N)   | O(Q × N) |
| 누적합 방식 | O(N)   | O(1)   | O(N + Q) |

---

### 🧠 요약

| 항목     | 반복문 방식        | Prefix Sum 방식   |
| ------ | ------------- | --------------- |
| 구현 난이도 | 쉬움            | 약간 높음           |
| 성능     | 느림 (쿼리 많을수록)  | 빠름 (쿼리 많을수록 유리) |
| 적합한 상황 | 입력 작고 쿼리 적을 때 | 입력 크고 쿼리 많을 때   |

---

> 💡 Prefix Sum은 팩토리얼처럼 누적 계산 구조를 가지며, 동적 계획법 사고와도 연결됩니다. 한 번 계산한 값을 재활용해 속도를 획기적으로 줄이는 기법이에요!

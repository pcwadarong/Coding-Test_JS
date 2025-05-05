### 문제 요약 (백준 1764번 - 듣보잡)

* 듣도 못한 사람 수 `N`
* 보도 못한 사람 수 `M`
* 총 `N + M`명의 이름이 주어짐
* \*\*두 목록 모두에 포함된 사람(교집합)\*\*을 찾아서 사전 순으로 출력

---

### 초기 코드 (문제 발생)

```ts
const notHeard = arr.slice(0, N);
const notSeen = arr.slice(N);
result.push(...notHeard.filter(e => notSeen.includes(e)));
```

* `notSeen.includes(e)`는 매번 O(N) 연산이므로, 전체 시간복잡도는 O(N \* M)
* 최대 입력 시 (`N, M <= 500,000`) → 약 2.5억 번 비교 발생
* **시간 초과(TLE)** 또는 **메모리 초과(OOM)** 발생 가능

---

### 수정 방법 (효율적인 자료구조 사용)

```ts
const notSeenSet = new Set(arr.slice(N));
for (const name of arr.slice(0, N)) {
  if (notSeenSet.has(name)) result.push(name);
}
result.sort();
```

* `Set`을 사용하면 `.has()`는 O(1) → 전체 시간복잡도 O(N + M + K log K)
* 훨씬 빠르고 메모리도 절약됨

---

## 배열 vs Set vs Map 요약 정리

| 목적           | 배열(Array)            | Set                   | Map                |
| ------------ | -------------------- | --------------------- | ------------------ |
| 순서 유지        | ✅                    | 🔸 (삽입 순서 유지되지만 권장 X) | 🔸                 |
| 중복 허용        | ✅                    | ❌                     | ✅ (Key는 고유)        |
| 존재 여부 검사     | ❌ O(N) `.includes()` | ✅ O(1) `.has()`       | ✅ O(1) `.has(key)` |
| 키-값 구조 필요    | ❌                    | ❌                     | ✅                  |
| 반복적 존재 여부 검사 | ❌ 비효율적               | ✅ 가장 적합               | ✅ 가능하지만 무거움        |
| 값만 저장할 때     | ✅                    | ✅ 가장 경량               | ❌ 낭비               |

---

### ✅ 결론 및 추천

* **중복 없고, 값 존재 여부만 빠르게 확인할 목적이라면 Set이 가장 효율적**
* \*\*순서 유지가 중요하거나, 단순한 데이터 흐름 처리(정렬/출력 등)\*\*에는 배열 유지가 더 적합
* **key-value 저장이 필요한 경우**에는 Map 사용

---

### 예시

```ts
// 잘못된 방식 (시간 초과 위험)
arr1.filter(x => arr2.includes(x)); // O(N * M)

// 좋은 방식
const set2 = new Set(arr2);
arr1.filter(x => set2.has(x)); // O(N)
```

---

이 문제에서 핵심은:

* 단순 배열끼리 `.includes()`로 비교하면 시간복잡도가 너무 크고,
* **Set을 활용해 존재 여부만 빠르게 검사하도록 구조를 바꾸는 것**이 중요하다.

## 🧩 이모티콘 할인행사 문제 설명 및 전략

### 🎯 목표

1. **이모티콘 플러스 가입자를 최대한 많이 확보하기** (최우선 목표)
2. **가입자 수가 같다면 이모티콘 판매액을 최대화하기**

---

### 📌 문제 조건 요약

* 각 사용자: `[할인 기준 비율, 구매 예산]`
* 각 이모티콘: `[정가]`
* 가능한 이모티콘 할인율: **10%, 20%, 30%, 40%** 중 택일

**사용자 행동 규칙**

1. 자신이 설정한 할인 비율 이상인 이모티콘만 구매
2. 그 이모티콘들의 합이 자신의 예산보다 크거나 같으면:

   * 이모티콘 구매 안 하고 이모티콘 플러스 가입
3. 아니라면:

   * 해당 이모티콘들만 실제 구매 (총합이 매출에 반영됨)

---

### 🧠 전략

#### ✅ 1. 이모티콘마다 할인율을 정하는 모든 경우의 수를 탐색

* 이모티콘 수가 최대 7개
* 할인율 선택은 4가지 → 최대 경우의 수: 4^7 = 16,384
* 완전탐색(백트래킹 / DFS)으로 가능

#### ✅ 2. 각 할인율 조합마다:

* 모든 유저를 시뮬레이션

  * 할인율 조건 만족하는 이모티콘만 구매 대상
  * 합산 가격이 예산 이상이면 가입자 수 +1
  * 아니면 그 합산 가격을 매출에 반영

#### ✅ 3. 결과 저장 및 비교

* 현재까지 구한 최적의 `[가입자 수, 매출]`을 전역 변수로 저장
* 새로운 조합에서 더 나은 결과가 나오면 갱신

  * **가입자 수가 더 크면 무조건 갱신**
  * 가입자 수가 같다면 **매출이 더 클 때 갱신**

---

### ✅ 핵심 구현 포인트

* `dfs(idx)` : 이모티콘 idx번째의 할인율을 선택하고 다음으로 재귀
* `if (idx === length)` 에서 조합 완성 → 유저 계산 시작
* 할인 계산 시 실수 문제 방지 위해 `Math.floor` 사용 추천
* 조건 비교 시 괄호 우선순위 정확히 처리

---

### ✅ 전체 코드와 상세 주석

```ts
function solution(users, emoticons) {
    let answer = [0, 0]; // [가입자 수, 총 매출]

    const discountRates = [10, 20, 30, 40];
    const discountsComb = Array(emoticons.length).fill(0); // 각 이모티콘의 할인율 조합 저장

    // DFS로 각 이모티콘의 할인율을 하나씩 정해나감
    function dfs(idx) {
        // 모든 이모티콘의 할인율이 정해졌을 때
        if (idx === emoticons.length) {
            let subscribers = 0;
            let profits = 0;

            // 사용자별로 구매 또는 플러스 가입 판단
            for (const [minDiscount, budget] of users) {
                let sum = 0;

                // 현재 할인율 조합으로 사용자 기준에 따라 이모티콘 구매 계산
                for (let i = 0; i < emoticons.length; i++) {
                    const discount = discountsComb[i];
                    if (discount >= minDiscount) {
                        sum += Math.floor(emoticons[i] * (100 - discount) / 100);
                    }
                }

                // 구매 금액이 예산 이상이면 플러스 가입
                if (sum >= budget) {
                    subscribers++;
                } else {
                    profits += sum; // 아니면 매출로 집계
                }
            }

            // 기존 최대값과 비교하여 결과 갱신
            if (
                subscribers > answer[0] ||
                (subscribers === answer[0] && profits > answer[1])
            ) {
                answer = [subscribers, profits];
            }

            return; // 조합 완성 후 리턴 필수
        }

        // 현재 이모티콘에 대해 4가지 할인율 중 하나 선택하여 다음 재귀
        for (const rate of discountRates) {
            discountsComb[idx] = rate;
            dfs(idx + 1);
        }
    }

    dfs(0); // DFS 시작 (필수 호출!)
    return answer;
}
```

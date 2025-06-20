[더 자세한 문제 풀이](https://velog.io/@pcwadarong/프로그래머스-2022-kakao-blind-recruitment-양궁대회)

## 🧩 문제 해석

* 라이언과 어피치가 점수 10\~0에 대해 화살을 쏨
* 어피치가 쏜 화살 수가 `info`로 주어짐 (index 0은 10점, index 10은 0점)
* 라이언은 `n`발의 화살을 가지고 있음
* 각 점수에서 **더 많이 쏜 사람만** 점수를 얻음
* 점수가 같으면 **어피치가 이김** (선취 우선)
* 라이언이 이길 수 있는 **가장 큰 점수 차이**를 구하되,
* 점수 차이가 같으면 **낮은 점수에 더 많은 화살을 쏜 경우** 우선

## 🔎 DFS를 사용해야 하는 이유

* 각 점수(10\~0)에 대해 **쏠지 말지** 선택해야 함 → 총 11개의 선택지
* 매 선택마다:
  1. 라이언이 이 점수에 화살을 쏠 경우 (어피치보다 1발 더 쏨)
  2. 라이언이 이 점수는 포기하는 경우
* 단순 조합이 아닌 **조건이 포함된 순열+백트래킹** 문제
* 화살 수(`n`)가 작고 선택지가 제한적이므로 **완전 탐색(DFS)** 적합

## 🧠 해결 전략 요약

1. DFS로 0\~10점까지 쏠지 말지 재귀적으로 탐색
2. 종료 조건(index === 11)이면 점수 계산
3. 라이언이 이겼고 최대 점수 차라면 `bestRecord` 갱신
4. 점수 차가 같다면, 더 낮은 점수에 더 많이 쏜 쪽 우선
5. 마지막에 가장 좋은 `bestRecord` 반환 (없으면 `[-1]`)


### ✅ 최종 코드

```ts
function solution(n, info) {
    let bestDiff = -1;
    let bestRecord = [-1];

    // 10~0(decrease), left arrows amount, lion score sum, apeach score sum, lions records arr
    function dfs(index, left, lion, apeach, records) {
        // all finished
        if (index === 11) {
            const copied = [...records];
            if (left > 0) copied[10] += left; //0 points gain left

            const diff = lion - apeach; // lion's win
            if (diff > 0) { // find best answer
                if (diff > bestDiff) {
                    bestDiff = diff;
                    bestRecord = copied;
                } else if (diff === bestDiff) {
                    for (let i = 10; i >= 0; i--) {
                        if (copied[i] > bestRecord[i]) {
                            bestRecord = copied; // update o
                            break;
                        } else if (copied[i] < bestRecord[i]) {
                            break; // update x
                        }
                    }
                }
            }
            return;
        }

        // 1. not shot → apeach gains
        dfs(index + 1, left, lion, info[index] ? apeach + 10 - index : apeach, records);

        // 2. shot → lion gains
        const need = info[index] + 1;
        if (left >= need) {
            const copied = [...records];
            copied[index] = need;
            dfs(index + 1, left - need, lion + 10 - index, apeach, copied);
        }
    }

    dfs(0, n, 0, 0, Array(11).fill(0));
    return bestRecord;
}
```

* `copied`를 매번 새로 만들어주는 이유: 이전 분기에서 만든 배열이 다음 분기와 **상호 간섭**하지 않게 하기 위함
* 마지막 점수(0점)에 남은 화살 몰아주는 것도 중요한 조건
* 비교는 항상 **낮은 점수부터 많이 쏜 쪽이 유리**하게!

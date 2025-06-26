/**
 * 두 개의 큐(queue1, queue2)에서 원소를 이동시켜,
 * 두 큐의 합이 같아지도록 만드는 최소 이동 횟수를 구하는 문제.
 * 이동은 한 큐에서 원소를 꺼내 다른 큐 뒤에 넣는 방식으로 수행된다.
 * 단, 큐의 길이를 n이라 할 때 최대 3n번까지만 이동을 시도하며,
 * 그 안에 못 맞추면 -1을 반환한다.
 */

function solution(queue1: number[], queue2: number[]): number {
    // 두 큐를 하나의 배열로 이어붙인다. (전체 상태 표현)
    const total = queue1.concat(queue2);

    // 목표는 전체 합을 절반으로 나눈 값
    const goal = total.reduce((a, b) => a + b) / 2;

    // 전체 합이 홀수면 두 큐가 같은 합을 가질 수 없으므로 불가능
    if (goal * 2 % 2 !== 0) return -1;

    // 현재 queue1의 합을 sum으로 초기화
    let sum = queue1.reduce((a, b) => a + b);

    const n = queue1.length;     // 각 큐의 길이
    const limit = n * 3;         // 최대 시도 횟수: 3n (큐의 모든 상태 순환을 고려한 상한: 서로 주고 받고, queue1이 다시 queue1으로 돌아오는 상황까지)

    let i = 0;                   // 왼쪽 포인터 (queue1의 시작 지점)
    let j = n;                   // 오른쪽 포인터 (queue2의 시작 지점)

    /**
     * i, j는 실제 배열 크기(2n)를 넘어설 수 있다.
     * 이때 인덱스를 배열처럼 쓰기 위해 `i % (2 * n)`으로 원형 인덱싱을 한다.
     * 예: 길이가 6인 배열에서 i = 7이면 → 실제 접근은 index 1
     */

    for (let count = 0; count <= limit; count++) {
        // 현재 윈도우(슬라이딩 범위)의 합이 목표와 같다면 이동 횟수 반환
        if (sum === goal) return count;

        // 현재 합이 너무 크면 → 왼쪽 포인터 이동 (원소 제거)
        if (sum > goal) {
            sum -= total[i % (2 * n)];  // 원형 큐처럼 인덱스 접근
            i++;
        } 
        // 현재 합이 너무 작으면 → 오른쪽 포인터 확장 (원소 추가)
        else {
            sum += total[j % (2 * n)];
            j++;
        }
    }

    // 최대 시도 횟수 내에 해결하지 못하면 불가능
    return -1;
}

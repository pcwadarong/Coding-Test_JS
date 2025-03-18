`shift`를 쓰지 않고 `queue`와 `front`를 사용한 이유는 시간 복잡도 때문이다. `input`이 500,000일 때 시간 초과가 발생한다.

수정 전 `shift`를 사용한 코드는 다음과 같다.

```ts
const input = Number(require('fs').readFileSync("/dev/stdin").toString());
const arr: number[] = Array.from({length: input}, (_, i) => i + 1 );

while(arr.length > 1){
    arr.shift();
    if (arr.length === 1) break;
    else arr.push(arr.shift()!);
}

console.log(arr[0]);
```

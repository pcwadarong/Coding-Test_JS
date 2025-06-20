function solution(new_id) {
  let answer = new_id
    .toLowerCase()
    .replace(/[^a-z\d\-_.]/g, "") // 1단계: a-z 소문자, /d 숫자, \- (escape), _, . 를 global하게 ''로 치환
    .replace(/\.{2,}/g, ".") // 2단계: .가 {2,} 2개 이상 (쉼표: 이상)일 경우 . 하나만
    .replace(/^\.|\.$/g, ""); // 3단계: ^시작 | 혹은 $ 끝날 때 공백으로 변경

  if (!answer) answer = "a";

  answer = answer.slice(0, 15).replace(/\.$/, ""); // 5,6단계: 16자까지 자르고, 맨 뒤가 . 이면 다시 공백화
  return answer.padEnd(3, answer.at(-1)); // 3개 이상일 때까지, at(-1)는 마지막 문자 (=== [length-1])
}

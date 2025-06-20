function solution(new_id) {
  let answer = new_id
    .toLowerCase()
    .replace(/[^a-z\d\-_.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "");

  if (!answer) answer = "a";

  answer = answer.slice(0, 15).replace(/\.$/, "");
  return answer.padEnd(3, answer.at(-1));
}

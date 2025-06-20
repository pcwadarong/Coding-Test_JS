function solution(new_id) {
    let answer = new_id.toLowerCase()
      .replace(/[^a-z\d\-_.]/g, '')
      .replace(/\.{2,}/g, '.');

    if (answer.startsWith('.')) answer = answer.substr(1);
    if (answer.endsWith('.')) answer = answer.slice(0, -1);
    
    if (!answer) answer = 'a';
    
    if (answer.length >= 16) answer = answer.slice(0, 15);
    if (answer.endsWith('.')) answer = answer.slice(0, -1);
    
    answer = answer.padEnd(3, answer[answer.length-1]);
    
    return answer;
}
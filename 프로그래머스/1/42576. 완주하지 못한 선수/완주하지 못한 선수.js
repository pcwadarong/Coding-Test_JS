function solution(participant, completion) {
  const nameCount = new Map();

  participant.forEach(name => nameCount.set(name, (nameCount.get(name) || 0) + 1));
  completion.forEach(name => nameCount.set(name, nameCount.get(name) - 1));
    
  for (const [key, value] of nameCount) {
    if (value > 0) return key;
  }
}
function solution(s) {
    const arr = s.slice(2,-2).split('},{')
    .map(e => e.split(',').map(Number))
    .sort((a,b) => a.length - b.length);
    
    const answer = new Set();
    
    for (let e of arr) {
        for (let i of e) answer.add(i);
    }
    
    return Array.from(answer);
}

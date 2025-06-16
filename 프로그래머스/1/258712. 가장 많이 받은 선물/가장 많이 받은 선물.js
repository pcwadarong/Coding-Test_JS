function solution(friends, gifts) {
    const table = Object.fromEntries(friends.map(a => [a, Object.fromEntries(friends.map(b => [b, 0]))]));
    const score = Object.fromEntries(friends.map(name => [name, 0]));
    
    for (const gift of gifts) {
        const [from, to] = gift.split(' ');
        table[from][to]++;
        score[from]++;
        score[to]--;
    }
    
    let answer = 0;
    
    for (const a of friends){
        let count = 0;
        for(const b of friends){
            if (a === b) continue;
            if (table[a][b] > table[b][a] || table[a][b] === table[b][a] && score[a] > score[b]) count++;
        }
        answer = Math.max(answer, count);
    }

    return answer;  
}
function solution(name, yearning, photo) {
    const answer = [];
    let map = new Map();
    for (let i = 0; i < name.length; i++) {
        map.set(name[i], yearning[i]);
    }
    photo.forEach ((e)=> {
        let sum = e.reduce((acc, curr) => {
        const value = map.get(curr) || 0;
        return acc + value;
    }, 0);
        
        answer.push(sum);
    });
    
    return answer;
}
function solution(survey, choices) {
    const personalityComb = {
        RT: { R: 0, T: 0 },
        CF: { C: 0, F: 0 },
        JM: { J: 0, M: 0 },
        AN: { A: 0, N: 0 }
    };
    
    function mapping(survey, count) {
        const [a, b] = survey.split('');
        const type = [a, b].sort().join('');
        
        const target = count > 4 ? b : a;
        const score = Math.abs(count - 4);
        personalityComb[type][target] += score;
    }

    for (let i = 0; i<survey.length; i++){
        mapping(survey[i], choices[i]);
    }
    
    let answer = '';
    for (const type of Object.values(personalityComb)){
        const [key1, key2] = Object.keys(type).sort();
        answer += type[key1] >= type[key2] ? key1 : key2; 
    }

    return answer;
}
function solution(n, arr1, arr2) {
    const hex1 = arr1.map(l => l.toString(2).padStart(n, '0'));
    const hex2 = arr2.map(l => l.toString(2).padStart(n, '0'));
    const answer = Array.from({length: n}, () => Array(n).fill('#'));
    
    for (let i = 0; i < hex1.length; i++){
        for (let j = 0; j < hex1.length; j++){
            if (hex1[i][j] === '0' && hex2[i][j] === '0') answer[i][j] = ' ';
        }
    }
    
    return answer.map(row => row.join(''));
}
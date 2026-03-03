const solution = (name) => {
    let result = 0;
    
    // 1. 우선, a~알파벳까지 상하이동 횟수를 모두 구함
    // A~알파벳 VS A-Z-뒤에서 알파벳까지의 경우 중 최소값으로 합산
    const spellMove = [...name].reduce((acc, cur) => acc + Math.min(cur.charCodeAt(0) - 'A'.charCodeAt(0), 'Z'.charCodeAt(0) - cur.charCodeAt(0) + 1), 0);
    
    // 2. 좌우이동 최소 횟수를 구함
    // 1) 직진형
    let cursorMove = name.length - 1;
    for(let i = 0; i < name.length -1; i++) {
        let next = i + 1;
        
        while(next < name.length && name[next] === 'A'){
            next++;
        }
        
        // 2) 앞 우선
        const frontSideMove = i * 2 + name.length - next;
        // 3) 뒤 우선
        const backSideMove = (name.length - next) * 2 + i;
        
        cursorMove = Math.min(cursorMove, frontSideMove, backSideMove);
    }
    return spellMove + cursorMove;
}


const actionMessage = {
    Enter : '들어왔습니다',
    Leave : '나갔습니다',
}

function solution(record) {
    const userInfo = {};

    for (let user of record){
        const [action, uid, nickname] = user.split(' ');
        if (action !== 'Leave') userInfo[uid] = nickname; 
    }
    
    const answer = [];
    
    for (let user of record){
        const [action, uid] = user.split(' ');
        if (action === 'Change') continue;
        const nickname = userInfo[uid];
        const message = `${nickname}님이 ${actionMessage[action]}.`
        answer.push(message);
    }
    
    return answer;
}
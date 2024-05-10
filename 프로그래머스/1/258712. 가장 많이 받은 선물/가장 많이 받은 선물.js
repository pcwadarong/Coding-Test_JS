function solution(friends, gifts) {
    let answer = 0;
    let score = Object.fromEntries(friends.map(friend => [friend, 0]));
    let giveAmount = Object.fromEntries(friends.map(friend => [friend, {}] ));
    let receivedAmount = Object.fromEntries(friends.map(friend => [friend, {}] ));

    gifts.forEach(gift => {
        let [giver, receiver] = gift.split(' ');
        score[giver]++;
        score[receiver]--;
        if ( !giveAmount[giver][receiver] ) giveAmount[giver][receiver] = 1;
        else { giveAmount[giver][receiver]++ };
        if ( !receivedAmount[receiver][giver]) receivedAmount[receiver][giver] = 1;
        else { receivedAmount[receiver][giver]++ };
    });
    
    for (let giver in giveAmount){
        let count = 0;
        friends.forEach(friend =>{
            if (giveAmount[giver][friend]){
                if (giveAmount[giver][friend] > receivedAmount[giver][friend] || !receivedAmount[giver][friend]){
                    count ++;
                } else if (giveAmount[giver][friend] === receivedAmount[giver][friend]){
                    if (score[giver] > score[friend]) count ++;
                }
            } else {
                if (giver !== friend && !giveAmount[giver][friend] && !receivedAmount[giver][friend] ){
                    if (score[giver] > score[friend]) count ++;
                }
            }
        })
        answer = Math.max(count, answer);
    }
    return answer;  
}
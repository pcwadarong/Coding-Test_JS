function solution(users, emoticons) {
    let answer = [0, 0];
    
    const discountRates = [10, 20, 30, 40];
    const length = emoticons.length;
    const discountsComb = Array(length).fill(0);
    
    function dfs(idx){
        if (idx === length){ // 각 이모티콘의 비율이 정해짐
            let subscribers = 0;
            let profits = 0;
            
            for (const user of users){
                const [minDiscount, budget] = user;
                let sum = 0;
                
                for (let i = 0; i < discountsComb.length; i++){
                    const percent = discountsComb[i];
                    if (percent >= minDiscount){
                        sum += emoticons[i] * (100 - percent) / 100;
                    }
                }
                
                if (sum >= budget) subscribers++;
                else profits += sum; 
            }
            
            if (subscribers > answer[0] || (subscribers === answer[0] && profits > answer[1])) answer = [subscribers, profits];
            return;
        }
        
        for (rate of discountRates) {
            discountsComb[idx] = rate;
            dfs(idx + 1);
        }
    }

    dfs(0);
    return answer;
}
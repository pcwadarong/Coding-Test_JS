function solution(n, info) {
    let bestDiff = -1;
    let bestRecord = [-1];
    
    // 10~0(decrease), left arrows amount, lion score sum, apeach score sum, lions records arr
    function dfs(index, left, lion, apeach, records){
        // all finished
        if (index === 11){
            const copied = [...records];
            if (left > 0) copied[10] += left; //0 points gain left
            
            const diff = lion - apeach; // lion's win
            if (diff > 0) { // find best answer
                if (diff > bestDiff) {
                    bestDiff = diff;
                    bestRecord = copied;
                } else if (diff === bestDiff){
                    for (let i = 10; i >= 0; i--){
                        if(copied[i] > info[i]){
                            bestRecord = copied; // update o
                            break;
                        } else if (copied[i] < bestRecord[i]) {
                        break; // update x
    }
                    }
                    
                }
            }
            return;
        }
        
        // 1. not shot → apeach gains
        dfs(index + 1, left, lion, info[index] ? apeach + 10 - index : apeach, records);

        // 2. shot → lion gains
        const need = info[index] + 1;
        if (left >= need){
            const copied = [...records];
            copied[index] = need;
            dfs(index + 1, left-need, lion + 10 - index, apeach, copied);
        }
    }
    
    dfs(0, n, 0, 0, Array(11).fill(0));
    return bestRecord;
}   

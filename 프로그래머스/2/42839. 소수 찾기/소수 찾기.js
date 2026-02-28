function solution(numbers) {
    let result = 0;
    const set = new Set();
    const visited = new Array(numbers.length).fill(false);
    
    // 순열 생성
    function dfs(current) {
        if (current.length > 0) set.add(+current);
        
        for (let i = 0; i < numbers.length; i++) {
            if (visited[i]) continue;
            
            visited[i] = true;
            dfs(current + numbers[i]);
            visited[i] = false;
        }
    }
    
    dfs('');
    
    // 소수 판별
    set.forEach((e) => {
        if (e < 2) return;
        
        for (let i= 2; i <= Math.sqrt(e); i++){
            if (e % i === 0) return;
        }
        
        result++;
    })
    
    return result;
}
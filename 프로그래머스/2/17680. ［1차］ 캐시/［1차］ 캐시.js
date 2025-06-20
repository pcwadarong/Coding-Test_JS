function solution(cacheSize, cities) {
    if (cacheSize === 0) return cities.length * 5;
    
    const cache = new Set();
    let answer = 0;
    
    for (const city of cities){
        const key = city.toLowerCase();
        
        if (cache.has(key)) {
            cache.delete(key);
            cache.add(key);
            answer += 1;
            continue;
        }
        
        if (cache.size >= cacheSize) cache.delete(cache.values().next().value);
            
        cache.add(key);
        answer += 5;
    }
    
    return answer;
}
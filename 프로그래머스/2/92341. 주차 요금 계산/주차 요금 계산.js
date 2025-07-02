function convertValue(time){
    const [hour, min] = time.split(':').map(Number);
    return hour * 60 + min;
}

function solution(fees, records) {
    const [basicTime, basicFee, unitTime, unitFee] = fees.map(Number);
    const map = new Map();
    const timeMap = new Map();

    for (let record of records){
        const [time, num, history] = record.split(' ');
        
        if (history === 'IN') map.set(num, time);
        if (history === 'OUT') {
            timeMap.set(num, (timeMap.get(num) ?? 0) + convertValue(time) - convertValue(map.get(num)));
            map.delete(num);
        }
    }
    
    for (const [num, time] of map){
       timeMap.set(num, (timeMap.get(num) ?? 0) + convertValue('23:59') - convertValue(time));
    }
    
    function calculateFee(sum){
        if (sum <= basicTime) return basicFee;
        else return basicFee + Math.ceil((sum - basicTime)/ unitTime) * unitFee;
    }
    
    return [...timeMap].sort((a,b) => Number(a[0]) - Number(b[0])).map(e => calculateFee(e[1]));
}
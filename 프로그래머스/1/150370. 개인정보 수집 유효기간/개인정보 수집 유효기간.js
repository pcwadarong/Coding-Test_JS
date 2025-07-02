

function solution(today, terms, privacies) {
    const answer = [];

    const [todayYear, todayMonth, todayDay] = today.split('.').map(Number);
    const todayValue = todayYear * 12 * 28 + todayMonth * 28 + todayDay;
    
    const termMap = new Map(
        terms.map((term) => {
            const [termType, durationMonths] = term.split(' ');
            return [termType, durationMonths];
        })
    );
    
    function isExpired(date, termType){
        const [startYear, startMonth, startDay] = date.split('.').map(Number);
        const totalDays = startYear * 12 * 28 + startMonth * 28 + startDay;
        const expiredDate = totalDays + termMap.get(termType) * 28;
        return expiredDate <= todayValue;
    } 
    
    privacies.forEach((privacy, index) => {
        const [startDate, termType] = privacy.split(' ');
        if (isExpired(startDate, termType)) answer.push(index + 1);
    });
    
    return answer;
}
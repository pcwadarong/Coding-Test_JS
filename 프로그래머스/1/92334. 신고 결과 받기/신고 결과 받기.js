function solution(id_list, report, k) {
    const records = new Map(id_list.map(e => [e, new Set()]));
    const reportedBy = new Map(id_list.map(e => [e, new Set()]));
    const answer = new Map(id_list.map(e => [e, 0]));
    
    for (let record of report){
        const [reporterId, reportedId] = record.split(' ');
        records.get(reporterId).add(reportedId);
        reportedBy.get(reportedId).add(reporterId);
    }
    
    const reportedMember = [...reportedBy].filter(([key, value]) => value.size >= k).map(([key]) => key);
    for (const [key, value] of records){
        for (let reportedId of reportedMember){
            if ([...value].includes(reportedId)) answer.set(key, (answer.get(key) ?? 0) + 1);
        }
    }
    
    return [...answer].map(e => e[1]);
}
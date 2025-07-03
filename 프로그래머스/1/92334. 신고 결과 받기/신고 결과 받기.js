function solution(id_list, report, k) {
    // set으로 중복 신고 삭제
    let reports = [...new Set(report)].map(e => e.split(' '));
    const count = new Map(id_list.map(e => [e, 0]));
    const answer = new Map(id_list.map(e => [e, 0]));

    // id당 받은 신고 수 저장
    for (let record of reports){
        count.set(record[1], count.get(record[1]) + 1);
    }

    // reportedId의 신고 수가 k 이상이면 reporterId의 숫자 추가(메일 받을 사람 수)
    for (let record of reports){
        if (count.get(record[1]) >= k){
            answer.set(record[0], answer.get(record[0]) + 1);
        }
    }

    // reporterId의 value 반환
    return [...answer].map(e => e[1]);
}

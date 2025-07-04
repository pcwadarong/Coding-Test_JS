function solution(genres, plays) {
    const totalPlay = new Map();
    genres.forEach((e, i) => totalPlay.set(e, (totalPlay.get(e) ?? 0) + plays[i]));

    const arr = genres.map((e, i) => [e, plays[i], i]);
    arr.sort((a,b) => (totalPlay.get(b[0]) - totalPlay.get(a[0])) || b[1] - a[1] || a[2] - b[2] );
    
    let count = 0;
    let genre = '';
    const answer = [];
    
    for (const song of arr){
        if (genre !== song[0]) {
            genre = song[0];
            count = 0;
        }
        if (count === 2) continue;
        answer.push(song[2]);
        count++;
    }
    
    return answer;
}
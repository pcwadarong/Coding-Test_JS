function solution(priorities, location) {
    let queue = [...priorities];
    let index = [...Array(priorities.length).keys()];
    let count = 0;

    for (let i = 0; i < priorities.length; i++) {
        let max = Math.max(...queue);

        while (queue[0] < max) {
            queue.push(queue.shift());
            index.push(index.shift());
        }
        
        if (queue[0] === max){
          count++;
            if (index[0] === location){
                return count;
            }
            queue.shift();
            index.shift();
        }
    }
}
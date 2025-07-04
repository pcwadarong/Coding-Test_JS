function solution(arr){
   let stack = [];
    
    arr.forEach (e =>{
        if (stack.length !== 0 && stack[stack.length-1] === e){
            stack.pop();
        }
        stack.push(e);
    })
    
    return stack;
}
class Node {
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
    
    remove(){
        if (this.prev) this.prev.next = this.next;
        if (this.next) this.next.prev = this.prev;
    }
    
    restore(){
       if (this.prev) this.prev.next = this;
       if (this.next) this.next.prev = this; 
    }
}

function solution(n, k, cmd) {
    const nodes = Array.from({ length: n }, (_, i) => new Node(i));

    for (let i = 1; i < n; i++){
        nodes[i-1].next = nodes[i];
        nodes[i].prev = nodes[i - 1];
    }
    
    let curr = nodes[k];
    const removed = [];

    for (const [op, x] of cmd.map(c => c.split(' '))) {
       switch (op) {
          case 'U':
            for (let i = 0; i < +x; i++) curr = curr.prev;
            break;
          case 'D':
            for (let i = 0; i < +x; i++) curr = curr.next;
            break;
          case 'C':
            removed.push(curr);
            curr.remove();
            curr = curr.next ?? curr.prev;
            break;
          case 'Z':
            const node = removed.pop();
            node.restore();
            break;
        }
    }
    
    const result = Array(n).fill('O');
    removed.forEach(node => result[node.value] = 'X');
    return result.join('');
}
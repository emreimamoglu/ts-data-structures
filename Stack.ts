import { LinkedList, LinkNode } from "./SinglyLinkedList";

export class Stack<T>{
    private list = new LinkedList<T>();
    private capacity: number = 10;

    constructor(capacity?: number) {
        if (capacity)
            this.capacity = capacity;
    }

    public isEmpty = (): boolean => {
        return this.list.isEmpty();
    }
    public peek = () : T | undefined => {
        if(this.isEmpty())
        return;


        return this.list.peekHead()?.data || undefined;
    }
    public push = (data : T) : boolean => {
        if(this.capacity <= this.list.getSize())
        return false;

        const node = new LinkNode<T>(data);
        this.list.addHead(node);
        return true;
     }
    public pop = () : T | undefined => {
        if(this.isEmpty())
        return;

        const data = this.list.peekHead()?.data;
        this.list.removeHead();
        return data;
    }
    
    public print = () : T[] => {
        return this.list.traverse();
    }

    public contains = (comparator : (data : T) => boolean) => {
        const res = this.list.search(comparator);

        if(res){
            return true
        }

        return false
    }
}


/**********************************************************************************************************/

interface Ball{
    color : string;
}

const stack = new Stack<Ball>(15);
stack.push({color: 'red'});
stack.push({color: 'blue'});
//console.log(stack.pop());
stack.pop();
console.log(stack.contains(({color}) => color === 'blue'));

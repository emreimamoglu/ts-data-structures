import { LinkedList, LinkNode } from "./SinglyLinkedList";


export class Queue<T>{
    private list = new LinkedList<T>;
    private capacity: number = 10;

    constructor(capacity?: number) {
        if (capacity)
            this.capacity = capacity;
    }


    public getSize = () => this.list.getSize();
    public isEmpty = (): boolean => this.list.isEmpty();
    public isFull = (): boolean => this.list.getSize() >= this.capacity;
    public peek = (): LinkNode<T> | undefined => this.list.peekHead();
    public enqueue = (value: T) => {
        if (this.isFull())
            return false;

        const node = new LinkNode<T>(value);
        this.list.addTail(node);
        return true;
    }
    public dequeue = (): T | undefined => {
        if (this.isEmpty())
            return;

        const head = this.list.peekHead();
        this.list.removeHead();
        return head?.data
    }

    public print = (): T[] => this.list.traverse();
}

/**********************************************************************************************************************/

interface Enterance {
    name: string;
}

const queue = new Queue<Enterance>(15);
queue.enqueue({name: 'Emre'});
queue.enqueue({name : 'Merve'});
console.log(queue.isEmpty());
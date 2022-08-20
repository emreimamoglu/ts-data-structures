export class LinkNode<T>{
    constructor(public data: T, public next?: LinkNode<T>) { }
}

export class LinkedList<T>{
    private size: number = 0;
    constructor(private head?: LinkNode<T>, private tail?: LinkNode<T>) {
        if(head)
        this.size++;
    }

    public getSize = (): number => this.size;
    public isEmpty = () : boolean => this.size === 0;
    public peekHead = (): LinkNode<T> | undefined => this.head;
    public peekTail = (): LinkNode<T> | undefined => this.tail;
    public addHead = (node: LinkNode<T>): void => {
        if (!this.head) {
            this.head = node;
            this.tail = node;
            this.size++
        } else {
            node.next = this.head;
            this.head = node;
            this.size++
        }

    }
    public addTail = (node: LinkNode<T>): void => {
        if(this.tail){
            this.tail.next = node;
            this.tail = node;
        }else{
            this.head = this.tail = node
        }
        this.size++;
    }

    public removeHead = () => {
        if(this.isEmpty())
        return;

        if(this.head && this.head.next){
            this.head = this.head.next;
        }else{
            this.head = undefined;
        }

        this.size--;
    }

    public removeTail = () => {
        let start = this.head;
        if(this.head === this.tail){
            this.head = this.tail = undefined;
            this.size--;
            return;
        }
        while(start){
            if(start.next === this.tail){
                start.next = undefined;
                this.tail = start;
                this.size--;
                return;
            }

            start = start.next;
        }

    }

    public deleteNode = (index: number): void => {

        if(this.isEmpty())
        return;

        if(index >= index && index < 0)
        return;

        if(index === 0){
            this.removeHead();
            return;
        }

        if(index === this.size - 1){
            this.removeTail();
            return;
        }

        let start = this.head;
        let prev = null;
        
        for(let i = 0; i < index; i++){
            if(i === index - 1)
            prev = start
        }

        if(prev){
            if(prev.next){
                prev.next = prev.next.next;
            }else{
                prev.next = undefined
            }
            this.size--;
        }
        

    }

    public traverse = (): T[] => {
        let start: LinkNode<T> | undefined = this.head;
        const arr: any = [];

        while (start) {
            arr.push(start.data);
            start = start.next;
        }

        return arr;
    }

    public search = (comparator: (data: T) => boolean): LinkNode<T> | undefined => {
        let start : LinkNode<T> | undefined = this.head;

        while (start) {
            if (comparator(start.data)) {
                return start;
            }
            start = start.next;
        }
        return undefined;
    }
}

/***************************************************************************************************************/


// interface Post {
//     id: number,
//     tweet: string
// }

// const node1 = new LinkNode<Post>({
//     id: 1,
//     tweet: 'emre'
// })

// const node2 = new LinkNode<Post>({
//     id: 2,
//     tweet: 'cemre'
// })

// const node3 = new LinkNode<Post>({
//     id: 3,
//     tweet: 'baba'
// })

// const linkedList = new LinkedList<Post>(node1, node1);
// linkedList.addTail(node2);
// linkedList.addTail(node3);
// linkedList.deleteNode(2)
// console.log(linkedList)
//console.log(linkedList.search(({id}) => id === 2));
export class LinkNode<T>{
    constructor(public data: T, public next?: LinkNode<T>) { }
}

export class LinkedList<T>{
    private size: number = 0;
    constructor(private head: LinkNode<T>, private tail: LinkNode<T>) {
        this.size++;
    }

    public getSize = (): number => this.size;
    public isEmpty = () : boolean => this.size === 0;
    public peekHead = (): LinkNode<T> => this.head;
    public peekTail = (): LinkNode<T> => this.tail;
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
        this.tail.next = node;
        this.tail = node;
        this.size++;
    }
    public deleteNode = (index: number): void => {
        let counter: number = 0;
        let start = this.head;
        let found: LinkNode<T> | undefined = undefined;

        while (start.next) {
            if (counter + 1 === index)
                break;

            counter++;
            start = start.next;
        }

        found = start.next
        if (found && found.next) {
            start.next = found.next;
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


interface Post {
    id: number,
    tweet: string
}

const node1 = new LinkNode<Post>({
    id: 1,
    tweet: 'emre'
})

const node2 = new LinkNode<Post>({
    id: 2,
    tweet: 'cemre'
})

const node3 = new LinkNode<Post>({
    id: 3,
    tweet: 'baba'
})

const linkedList = new LinkedList<Post>(node1, node1);
linkedList.addTail(node2);
linkedList.addHead(node3);
// linkedList.deleteNode(1)
// console.log(linkedList.traverse())
console.log(linkedList.search(({id}) => id === 2));
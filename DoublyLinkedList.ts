export class LinkNode<T>{
    constructor(public data: T, public next?: LinkNode<T>, public prev?: LinkNode<T>) { }
}

export class DoublyLinkedList<T>{
    constructor(private head?: LinkNode<T>, private tail?: LinkNode<T>, private size: number = 0) {
        if (head) {
            this.tail = this.head;
            this.size++;
        }
    }

    public getSize = (): number => this.size;
    public peekFront = () => this.head;
    public peekBack = () => this.tail;
    public addFront = (node: LinkNode<T>) => {
        if (!this.head) {
            this.head = this.tail = node;
            this.size++
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
            this.size++;
        }
    }
    public addBack = (node: LinkNode<T>) => {
        if (!this.tail) {
            this.head = this.tail = node;
            this.size++
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
            this.size++;
        }
    }
    public deleteNode = (index: number) => {
        let start = this.head;
        let counter = 0;
        let searched = null;

        while(start){
            if(counter > index)
            return;

            if(counter === index){
                searched = start;
                break;
            }

            start=start.next;
            counter++;
        }

        if(searched === this.head){
            this.head = this.head.next;
            this.size--;
            return;
        }
        if(searched === this.tail){
            this.tail.prev ? this.tail.prev.next = undefined : null;
            this.tail = this.tail.prev;
            this.size--;
            return;
        }

        if(searched !== null && searched.prev){
            searched.prev.next = searched.next;
            if(searched.next){
                searched.next.prev = searched.prev;
            }
            searched = undefined;
            this.size--;
            return;
        }

    }
    public search = (comparator: (searched: T) => boolean): LinkNode<T> | null => {
        let start = this.head;

        while (start) {
            if (comparator(start.data))
                return start;

            start = start.next;
        }

        return null;
    }
    public traverse = (): T[] => {
        let start = this.head;
        let arr = [];

        while (start) {
            arr.push(start.data);
            start = start.next;
        }

        return arr;
    }
}


/*****************************************************************************************************************/

interface Book {
    name: string;
}
const node1 = new LinkNode<Book>({ name: 'Harry Potter' })
const node2 = new LinkNode<Book>({ name: 'Lord of the Rings' })
const node3 = new LinkNode<Book>({ name: 'World Economics' })
const node4 = new LinkNode<Book>({ name: 'Algorithms and Data Structures' })


const linkedList = new DoublyLinkedList<Book>();
linkedList.addFront(node1)
linkedList.addBack(node2);
linkedList.addBack(node3);
linkedList.addFront(node4);
linkedList.deleteNode(2);

//console.log(linkedList.getSize());

console.log(linkedList.search(({name})=> name === 'Harry Potter'));

// console.log(linkedList.peekFront());
// console.log(linkedList.traverse());
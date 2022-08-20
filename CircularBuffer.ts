class CircularBuffer<T>{
    private buffer: T[] = [];
    private size: number = 0;
    private capacity: number = 0;

    private writeIndex: number = 0;
    private readIndex: number = 0;

    constructor(capacity: number) {
        this.buffer = new Array(capacity);
        this.capacity = capacity;
    }

    public isEmpty = (): boolean => this.size === 0;
    public getSize = (): number => this.size;
    public clear = (): void => {
        this.buffer = new Array(this.capacity);
        this.size = 0;
    }
    public peekHead = (): T | null => {
        if (this.isEmpty())
            return null;

        return this.buffer[this.readIndex];
    }
    public peekTail = (): T | null => {
        if (this.isEmpty())
            return null;

        if(this.writeIndex === 0){
            return this.buffer[this.size - 1];
        }

        return this.buffer[this.writeIndex - 1];
    }
    public enqueue = (data: T): void => {
        this.buffer[this.writeIndex] = data;

        const isOverwritten = this.size !== 0 && this.readIndex === this.writeIndex;
        
        if(isOverwritten)
        this.readIndex = (this.readIndex + 1) % this.capacity;

        this.writeIndex = (this.writeIndex + 1) % this.capacity;
        this.size++;
    }
    public dequeue = (): T | null => {
        const read = this.buffer[this.readIndex];
        this.readIndex = (this.readIndex + 1) % this.capacity;
        this.size--;

        return read;
    }
    public contains = (comparator: (data: T) => boolean) => {
        return this.buffer.some(item => comparator(item));
    }
}

/********************************************************************************************************************/


const circularBuffer = new CircularBuffer<number>(5);

circularBuffer.enqueue(1);
circularBuffer.enqueue(2);
circularBuffer.enqueue(3);
circularBuffer.enqueue(4);
circularBuffer.enqueue(5);
circularBuffer.enqueue(6);
circularBuffer.enqueue(7);
circularBuffer.dequeue();
circularBuffer.dequeue();
circularBuffer.dequeue();
// console.log(circularBuffer.contains((data) => data === 4)); false
// console.log(circularBuffer.contains((data) => data === 1)); true

console.log(circularBuffer)
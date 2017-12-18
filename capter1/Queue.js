class Node {
    constructor (item) {
        this.item = item;
        this.next = null;
    }
}

/**
 * queue implemented using linkedlist
 */
class Queue {
    constructor () {
        this.first = null;
        this.last = null;
        this.n = 0;
    }

    /**
     * Returns true if this queue is empty.
     *
     * @return {@code true} if this queue is empty; {@code false} otherwise
     */
    isEmpty () {
        return this.first === null;
    }

    /**
     * Returns the number of items in this queue.
     * 
     * @return the number of items in this queue
     */
    size () { return n; }

    /**
     * Returns the item least recently added to this queue.
     *
     * @return the item least recently added to this queue
     * @throws NoSuchElementException if this queue is empty
     */
    peek () {
        if (this.isEmpty()) { throw new Error("NoSuchElementException"); }
        return this.first.item;
    }

    /**
     * Adds the item to this queue.
     *
     * @param  item the item to add
     */
    enqueue (item) {
        let oldLast = this.last;
        this.last = new Node(item);
        if (this.isEmpty()) {
            this.first = this.last;
        } else {
            oldLast.next = this.last;
        }
        this.n++;
    }

     /**
     * Removes and returns the item on this queue that was least recently added.
     *
     * @return the item on this queue that was least recently added
     * @throws NoSuchElementException if this queue is empty
     */
    dequeue () {
        if (this.isEmpty()) { throw new Error("NoSuchElementException"); }
        let item = this.first.item;
        this.first = this.first.next;
        this.n--;
        if (this.isEmpty()) {
            this.last = null;
        }
        return item;
    }
    /**
     * Returns a string representation of this stack.
     *
     * @return the sequence of items in this stack in LIFO order, separated by spaces
     */
    toString () {
        let arr = [];
        for (let item of this) {
            arr.push(item);
        }
        return arr.join(' ');
    }

     /**
     * Returns an iterator that iterates over the items in this queue in FIFO order.
     *
     * @return an iterator that iterates over the items in this queue in FIFO order
     */
    [Symbol.iterator] () {
        let current = this.first;
        return {
            next () {
                if (!current) {
                    return { value: undefined, done: true };
                } else {
                    let item = current.item;
                    current = current.next;
                    return { value: item, done: false };
                }
            }
        };
    }
}

var qu = new Queue();
qu.enqueue('1');
qu.enqueue('2');
qu.enqueue('3');
qu.enqueue('4');

console.log(qu.toString());
console.log(qu.dequeue());
console.log(qu.toString());
console.log(qu.peek())
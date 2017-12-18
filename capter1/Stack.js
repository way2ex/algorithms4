class Node {
    constructor (item) {
        this.item = item;
        this.next = null;
    }
}

/**
 * stack implemented using linkedlist
 */
class Stack {
    constructor () {
        this.first = null;
        this.n = 0;
    }

    /**
     * Return true if this stack is empty.
     * 
     * @return true if this stack is empty; false otherwise
     */
    isEmpty () {
        return this.first === null;
    }

    /**
     * Returns the number of items in this stack.
     * 
     * @return the number of items in this stack
     */
    size () { return n; }

    /**
     * Adds the item to the stack
     * 
     * @param item the item to add
     */
    push (item) {
        let oldFirst = this.first;
        this.first = new Node(item);
        this.first.next = oldFirst;
        this.n++;
    }

    /**
     * Removes and returns the item most recently added to this stack
     * 
     * @return the item most recently added
     * @throws NoSuchElementException if this stack is empty
     */
    pop () {
        if (this.isEmpty()) { throw new Error("NoSuchElementException"); }
        let item = this.first.item;
        this.first = this.first.next;
        n--;
        return item;
    }

    /**
     * Returns (but does not remove) the item most recently added to this stack.
     * 
     * @return the item most recently added to this stack
     * @throws NoSuchElementException if this stack is empty
     */
    peek () {
        if (this.isEmpty()) { throw new Error("NoSuchElementException"); }
        return this.first.item;
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
     * Returns an iterator to this stack that iterates through the items in LIFO order.
     *
     * @return an iterator to this stack that iterates through the items in LIFO order
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

var strStack = new Stack();
strStack.push('1');
strStack.push('2');
strStack.push('3');
console.log(strStack.toString()); // 3 2 1

module.export = Stack;


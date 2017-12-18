class Node {
    constructor (item) {
        this.item = item;
        this.next = null;
    }
}

class LinkedList {
    constructor () {
        this.first = null;
        this.last = null;
        this.n = 0;
    }

    /**
     * Returns the number of items in this linked list.
     * 
     * @return the number of items in this linked list
     */
    size () { return this.n; }

    /**
     * find the node with given item
     * @param { Any } item 
     * @return the node whose item equals the given item
     */
    find (item) {
        for (let node of this) {
            if (item === node.item) {
                return node;
            }
        }
        return undefined;
    }

    /**
     * find the previous node of given item
     * 
     * @param item the given item
     * @return null if item is the first node's item; node otherwise
     * @description simplify the thing, only consider two cases: find on or find null.
     */
    findPrevious (item) {
        // when the list is empty
        if (0 === this.size()) { return null; }
        if (item === this.first.item) {
            // when the item equals the first node's item
            return null;
        } else {
            let current = this.first;
            while(current.next) {
                if (item === current.next.item) {
                    return current;
                }
                current = current.next;
            }
            return null;
        }
    }
    /**
     * delete the node whose index is k
     * 
     * @param { Number } k the index of node to be deleted
     */
    delete (k) {
        let size = this.size();
        if (0 === size) { return; }
        if (1 === size && 1 === k ) {
            this.first = null;
            this.last = null;
            this.n--;
            return;
        }
        let i = 2, current = this.first;
        while (current.next) {
            if (k === i) {
                current.next = current.next.next;
                if (k === this.n) {
                    this.last = current;
                }
                this.n--;
                return;
            }
            current = current.next;
            i++;
        }
    }

    /**
     * remove the node with given item
     * 
     * @param { Any } item
     */
    remove (item) {
        let size = this.size();

        if (0 === size) { return false; }
        if (1 === size) {
            if (item === this.first.item) {
                this.first = null;
                this.last = null;
                this.n--;
                return true;
            }
            return false;
        }
        if (item === this.first.item) {
            this.first = this.first.next;
            this.last.next = this.first;
            this.n--;
            return true;
        }
        let pre = this.findPrevious(item);
        if (pre) {
            pre.next = pre.next.next;
            if (item === this.last.item) {
                this.last = pre;
            }
            this.n--;
            return true;
        }
        return false;
    }

    /**
     * remove the node after the given node
     * 
     * @param { Node } node the given node
     * @return { Boolean } true if success; false otherwise
     */
    removeAfter (node) {
        if (!node || !node.next) { return false; }
        if (node.next === this.last) { this.last = node; }
        node.next = node.next.next;
        this.n--;
        return true;
    }

    /**
     * insert a node after the reference node
     * 
     * @param { Node } refNode the reference node
     * @param { Any } item item of new node
     * @return null if fail; the inserted new Node otherwise
     */
    insertAfter (refNode, item) {
        let oldNode = refNode.next;
        let newNode = new Node(item);
        refNode.next = newNode;
        newNode.next = oldNode;
        this.n++;
        return newNode;
    }
    /**
     * add an node to the end of the linked list
     * 
     * @param { Any } item the item to add
     */
    push (item) {
        let node = new Node(item);
        let size = this.size();
        if (0 === size) {
            this.first = node;
            this.last = this.first;
            this.n++;
        }else if (1 === size) {
            this.first.next = node;
            this.last = node;
            this.n++;
        } else {
            this.last.next = node;
            this.last = node;
            this.n++;
        }
        this.last.next = this.first;
    }
    
    /**
     * Returns a string representation of this list.
     *
     * @return the sequence of items in this list, separated by spaces
     */
    toString () {
        let arr = [];
        for (let item of this) {
            arr.push(item);
        }
        return arr.join(' ');
    }

    /**
     * Returns an iterator to this linked list that iterates through the items in positive order (first -> last)
     * 
     * @return an iterator to this linked list that iterates through the items in positive order (first -> last)
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

var llist = new LinkedList();
let n = 8;
for (let i = 0; i < n; i++) {
    llist.push(i);
}
// console.log(llist.toString())
let M = 3, current = llist.first, i = 1;
while (llist.size() > 1) {
    if(M === i) {
        let item = current.item;
        current = current.next;
        llist.remove(item);
        i = 1;
        console.log(item);
        continue;
    }
    i++;
    current = current.next;
}
console.log("last--" + llist.first.item)

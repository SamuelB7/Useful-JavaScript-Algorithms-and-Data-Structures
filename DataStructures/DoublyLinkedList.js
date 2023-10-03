class Node {
    constructor(element) {
        this.element = element;
        this.next = undefined;
        this.prev = undefined;
    }
}

class DoublyLinkedList {
    constructor() {
        this.count = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            let current = this.head;
            if (index === 0) {
                if (this.head == null) {
                    this.head = node;
                    this.tail = node;
                } else {
                    node.next = this.head;
                    current.prev = node;
                    this.head = node;
                }
            } else if (index === this.count) {
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }
            this.count++
            return true;
        }
        return false;
    }
}


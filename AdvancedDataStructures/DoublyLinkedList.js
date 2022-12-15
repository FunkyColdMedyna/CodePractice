// re-create doubly linked lists
//pop(), push(), shift(), unshift()

//create node class
// val, this.next, this.prev

//create doubly linked list class
//head, tail, length

class Node {
    constructor(val){
        this.val = val
        this.prev = null;
        this.next = null; 
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        //add node to the end
        //create new node with values trying to add into list
        let newNode = new Node(val)

        //edge case -> if list is empty; set new node to be the head and the tail
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            
        } else {
            //establish links between nodes (prev & next)
            this.tail.next = newNode;
            newNode.prev = this.tail;
            //reassign tail to be new node
            this.tail = newNode;
        }
        //added item into list so must adjust length
        this.length++
        //return DLL
        return this
    }
    pop(){
        //remove node from end
        //edge case -> is list empty?  if so nnothing to remove, return undefined
        if(!this.head) return undefined;

        //instantiate variable to hold node we are removing 
        let removedNode = this.tail;

        //edge case -> if only one item in list, remmoving it makes list empty
        if (this.length === 1) {
            //reset head and tail to null
            this.head = null;
            this.tail = null;
        } else {
            //re-assign tail 
            this.tail = removedNode.prev;

            //remove connections from nodes (prev & next) 
            this.tail.next = null;
            removedNode.prev = null;
        }
        // adjust length of DLL
        this.length--
        //return node from end that was removed
        return removedNode;
    }
    shift(){
        //remove item from beginning of list
        //instantiate variable to hold removed node
        let removedNode = this.head;

        //error handling -> is list empty? return undefined
        if (!this.head) return undefined;

        //error handling -> if only 1 item in the list, removing it returns the list to empty
        if (this.length === 1 ) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = removedNode.next;
            removedNode.prev = null;
            removedNode.next = null;
        }
        //adjust length from removing item
        this.length--;
        //return node that was removed
        return removedNode;
    }
    unshift(val){
        //adding node to beginning. create new node.
        let newNode = new Node(val);

        //establish connections between nodes
        this.head.prev = newNode;
        newNode.next = this.head;
        //re-assign head to new node
        this.head = newNode;

        //increase length
        this.length++
        //return entire DLL
        return this
    }
}

let DLL = new DoublyLinkedList;
DLL.push(1);
DLL.push(2);
DLL.push(3);
DLL.push(4);
DLL.push(5);
DLL.push(6);

console.log(DLL)
console.log(DLL.pop());
console.log(DLL.pop());
console.log(DLL.pop());
console.log(DLL.pop());
console.log(DLL.pop());
console.log(DLL.pop());

console.log(DLL.pop()); //undefined

DLL.push(1);
DLL.push(2);
DLL.push(3);
console.log(DLL);

console.log(DLL.shift());
console.log(DLL.shift());
console.log(DLL.shift());
console.log(DLL.shift()); //undefined

DLL.push(3);
DLL.unshift(2);
DLL.unshift(1);
console.log(DLL);





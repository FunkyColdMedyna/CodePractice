// Re create the pop() & push() methods of a singly linked list WITHOUT looking @ the answers! //

// create node class
// value, next
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
//create singly linked list class
// head, tail,
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // push method
  push(val) {
    // create new Node with data val
    let newNode = new Node(val);

    // edge case to see if the SLL is empty if no head node then will be empty -> if it is then val/newNode becomes head and tail
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      // re-assign tail to be new node
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
    // return SLL
    return this;
  }
  //pop method
  pop() {
      // edge case to determine if there is a node to remove if SLL is empty then return undefined// 
    if(!this.head) return undefined;

    // traverse through SLL starting with head move through to next node and "pull along" a constant to hold the position for the newTail. This will end when there is no more current.next (because tail points to null)
    let current = this.head
    let newTail = current;

    while( current.next ) {
        newTail = current
        current = current.next
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--
    
    //check to see if there is anyhting left in the linked list. If the length has dropped to 0 then reset the head and tail to null
    if (!this.length) {
        this.head = null;
        this.tail = null;
    }

    //return value of the node that was "popped off"
    return current
  }
}

let newSinglyLinkedList = new SinglyLinkedList;
console.log(newSinglyLinkedList); // empty / null 
newSinglyLinkedList.push(1); 
console.log(newSinglyLinkedList); // 1
newSinglyLinkedList.push(2);
console.log(newSinglyLinkedList);// 1 -> 2

let testSLL = new SinglyLinkedList;
console.log(testSLL); // empty / null
testSLL.push(7);
testSLL.push(2);
console.log(testSLL); // 7 -> 2
console.log(testSLL.pop()); //2
console.log(testSLL); // 7
console.log(testSLL.pop()); // 7
console.log(testSLL);//empty / null
console.log(testSLL.pop()); // undefined 
console.log(testSLL); // empty / null
console.log(testSLL.pop()); // undefined
console.log(testSLL); // empty /null




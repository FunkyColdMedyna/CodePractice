// see figjam file for visuals & diagrams

//define node
class Node{
    constructor(val) {
        this.value = val
        this.next = null
    }
}

//define queue
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    //methods 
    //enqueue(val) - add node to end of queue
    enqueue(val){
        let newNode = new Node(val);

        //error handling - if the queue is empty make the new node the first item in the queue
        if(!this.first || !this.size) {
            this.first = newNode
            this.last = newNode
        } else {
        //reassign next property of last node to be new node - create connection. Then reassign last to newNode
        this.last.next = newNode;
        this.last = newNode
        }
        //account for insertion in size
        this.size++
        return this
    }
    //dequeue() - remove 1st node from start of queue
    dequeue(){
        //error handling - if list is empty 
        if (!this.first) return null;
        //error handling - if only 1 item in queue
        if (this.size === 1) {
            this.first = null;
            this.last = null
        } else {

        this.first = this.first.next;
    }
    this.size--
    return this
    }
    //peek() -> returns starting element without removing it 
    peek() {
        //error handling - if queue is empty 
        if (!this.first || !this.size) return null

        let firstNode = this.first
        return firstNode
    }
    //isEmpty() -> checks to see if the queue is empty 
    isEmpty(){
        if(!this.first || !this.size) {
             return true
        } else return false
    }
    //printQueue -> print all elements in the queue 
    printQueue(){
        //error handling - if queue is empty 
        if (!this.first || !this.size) {
            return null
        } else {
            //intialize collection, current element, counter to keep track of size
            let current = this.first;
            let collection = []
            let counter = 0
            while(counter !== this.size) {
                //will push in entire node --> if you want just the values of the node -> collection.push(curent.value)
                collection.push(current)
                current = current.next;
                counter++
            }
            return collection
        }
    }
}


//testing 

const testQueue = new Queue;
testQueue.enqueue(1); // 1
testQueue.enqueue(2); // 1-> 2
testQueue.enqueue(3); // 1-> 2-> 3
console.log(testQueue.peek());
console.log(testQueue.isEmpty());
console.log(testQueue.printQueue());
testQueue.dequeue(); // 2-> 3
testQueue.dequeue(); // 3
testQueue.dequeue(); // null 
testQueue.dequeue(); // null
console.log(testQueue.peek());
console.log(testQueue.isEmpty());
console.log(testQueue.printQueue());
// console.log(testQueue);

//challenge problem
//given a linked list, return the node that occurs the most in the list.
//for example, given the following linked list: 
// 1-> 1 -> 2 -> 2 -> 2 -> 3 -> null 
//this function should return the node of 2.
//the function should take in an argument of a linked list and return a value of the node that occurs the most often

//create node class -> value & next
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
};

//create SLL class -> head, tail, & length
class SLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        // create new Node with data val
        let newNode = new Node(val);
    
        // edge case to see if the SLL is empty if no head node then will be empty -> if it is then val/newNode becomes head and tail
        if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
        } else {
          // re-assign tail to be new node
          this.tail.next = newNode;
          this.tail = newNode;
        }
        //update length
        this.length++;
        // return SLL
        return this;
      }
    // pop() {
        // remove last node 
    // }
    // shift() {
        //remove head
    // }
    // unshift(val) {
      //add new node to beginning
    // }
    // get(index) {
      //retrieve value of node at specific index
    // }
    // set(index, val) {
      //update value of node at specific index (requires get)
    // }
    // insert(index, val) {
      
    // }
    // remove(index) {

    // }
}


// most frequent value //
// iterate through list and keep track of frequncy of values.
//  Once completed, return the value of the node that occurs the most often 

const mostFrequent = (list) => {

    //error checking to see if there is a list 
    if (list.length < 1) return undefined;
    if (list.length === 1 ) return list;

    let current = list.head;
    let counter = 0;
    let collection = new Map();

    // traverse through list -> while there is a next property (aka the tail will point to null)//
    while (counter < list.length) {
        //if collection doesn't have value add it in
        if (!collection.has(current.value)) {
            collection.set(current.value, 1)
        //otherwise increment the key value pair
        } else {
            collection.set(current.value, collection.get(current.value) + 1)
        }
        //update current to become the next value --> continues the loop
        current = current.next
        counter++
    }
    // console.log(collection)

    //intialize max count to 0
    let maxCount = 0;
    let maxValue = 0;

    //look at collection and see what key:value pair has the highest value. return this key
    collection.forEach((key) => {
       if( collection.get(key) > maxCount) {
        maxCount = collection.get(key)
        maxValue = key;
       }
    //    console.log(maxValue);
    })
    return maxValue;
}

let testSLL = new SLL;
testSLL.push(1);
testSLL.push(1);
testSLL.push(2);
testSLL.push(2);
testSLL.push(2);
testSLL.push(3);
console.log(testSLL);
console.log(mostFrequent(testSLL));

let testSLL2 = new SLL;
testSLL2.push(1);
testSLL2.push(2);
testSLL2.push(3);
testSLL2.push(3);
testSLL2.push(3);
console.log(testSLL2);
console.log(mostFrequent(testSLL2));
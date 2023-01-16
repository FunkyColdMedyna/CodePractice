// challenge 1: Draw and explain a diagram of how a stack data structure works 
// please see figjam file for diagram 

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    //challenge 2: Create 2 methods :
    //    push(val) insert an element at the top of the stack 
    //    pop() remove an element to the top of the stack 
    push(val){
        let newNode = new Node(val);
        //error handling - if list is empty set last to new node. We'll reset first after this if check
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;

        }
        this.size++
        return this
    }
    pop(){
        //error handling 
        //if stack is empty -> nothing to pop off return undefined / return 
        if(!this.first) return null;
        let poppedNode = this.first;
        if(this.first === this.last) {
            this.last = null;
        } 
        //create variable to return node being popped off
        this.first = this.first.next;
        this.size--;
        return poppedNode.value;
    }
    // Challenge 3: create 3 additional methods.
    // peek() retrieves the element at the top of the stack WITHOUT removing it
    //isEmpty() checks to see if the stack is empty. returns true if the stack is empty, false if the stack is not empty
    //printStack() - prints the elements in the stack 
    peek(){
        //error handling. if stack is empty then nothing to return
        if (!this.first) return null;
        let temp = this.first;
        return temp.value;
    }
    isEmpty(){
        if(!this.size) {
            return true
        } else {
            return false 
        }
    }
    printStack(){
        //error handling -> if stack is empty nothing to print
        if(!this.first) return null;
        //intialize counter to traverse through stack, intialize collection to hold elements from stack 
        let counter = this.first
        let collection = [];
        while(counter !== null) {
            collection.push(counter.value)
            counter = counter.next
        }
        return collection;
    }
}

//testing:
// const testStack = new Stack;
// console.log(testStack.isEmpty());
// console.log(testStack);
// testStack.push(1);
// console.log(testStack);
// testStack.push(2);
// testStack.push(3);
// console.log(testStack.isEmpty());
// console.log(testStack);
// console.log(testStack.printStack());
// testStack.pop(); //3
// console.log(testStack);
// testStack.pop(); // 2
// testStack.pop(); // 1
// testStack.pop(); // null
// console.log(testStack.printStack());
// console.log(testStack);
// console.log(testStack.pop());//1
// console.log(testStack);
// console.log(testStack.pop());//null
// console.log(testStack);




// Challenge 4: Valid Parenthesis
//     Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// PLEASE USE A STACK DATA STRUCTURE TO SOLVE THIS PROBLEM! An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
// Example 1:
// Input: s = "()"
// Output: true
// Example 2:
// Input: s = "()[]{}" Output: true
// Example 3:
// Input: s = "(]"
// Output: false
const isValid = (s) => { 
    // if the string s is empty or? if it is an odd number the parenthesis cannot be valid ???
    if(!s.length) return false
    // convert string into stack 
    let temp = s.split("").reverse();
    // console.log(temp);
    let collection = new Stack;
    for (let i=0; i < temp.length; i++){
        collection.push(temp[i])
    }
    // console.log(collection);

    //intialize counter to keep place in stack. Iterate through stack and and remove the nodes if the parenthesis match up
    let current = collection.first;
    // console.log(current);
    while(current !== null) {
        //check if the current is a match to its neighbor
        if( current.value === "(" && current.next.value === ")" 
        || current.value === "{" && current.next.value === "}"
        || current.value === "[" && current.next.value === "]") {
            // current = current.next.next;
            // console.log(current);
            //if a match pop off both  nodes
            collection.pop();
            // console.log(collection)
            collection.pop();
            // console.log(collection)
            
            //set current to the new first node
            if(!collection.first) break
             else current = collection.first;
        } else return false
    }
    if (!collection.size) return true
    else return false
};


//testing:
const test = "{}{}{}[][]";
console.log( isValid(test)); //true
const test2 = "{}][{}()";
console.log( isValid(test2)) ; // false
const test3 = "()";
console.log(isValid(test3)); // true
const test4 = "()[]{}";
console.log(isValid(test4)); // true
const test5 = "(]}";
console.log(isValid(test5)); //false


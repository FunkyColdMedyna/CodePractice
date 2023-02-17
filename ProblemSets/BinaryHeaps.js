// Given the following trees; label them appropriately (Binary Search TreeWalker, Max Binary HTMLTableCaptionElement, Min Binary Heap) //

// Tree 1 [33,18,41,12,27,39] 
    //Binary Search Tree - All left children are less than their parents, all right children are greater than their parents. 

// Tree 2 [ 41, 39, 33, 18, 27, 12 ]
    //Max Binary Heap - all parents have max two children. All children are less than the value of their parents. 

// Tree 3 [6, 7, 12, 10, 15,17 ]
    //Min Binary Heap - all parents have max two children. All children are greater than the value of their parents. 

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(element) {
        this.values.push(element)
        this.bubbleUp()
    }
    bubbleUp() {
        let idx = this.values.length - 1
        const element = this.values[idx]

        while (idx > 0) {
            let parentIdx = Math.floor((idx-1)/2);

            let parent = this.values[parentIdx];

            if (element <= parent) break;

            this.values[parentIdx] = element;
            this.values[idx] = parent;

            idx = parentIdx;
        }
    }
    extractMax(){
        const max = this.values[0];
        const end = this.values.pop();
        if ( this.values.length ) { 
            this.values[0] = end;
            this.sinkDown()
        }
        return max;
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while ( true ) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            if ( leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if ( leftChild > element) swap = leftChildIdx;
            }
            if (rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if (
                    (!swap && rightChild > element) ||
                    (swap && rightChild > leftChild)
                ) {
                    swap = rightChildIdx
                }
            }
            if (!swap) break;
            this.values[idx] =this.values[swap]
            this.values[swap] = element;
            idx = swap;
        }
    }
}

// Challenge2: 
// Given the folowing max Binary heap tees, create a function called maxValue() that returns the Value of the largest number in the tree. 
const treeMaxHeap = new MaxBinaryHeap();
treeMaxHeap.insert(6);
treeMaxHeap.insert(5);
treeMaxHeap.insert(3);
treeMaxHeap.insert(4);
treeMaxHeap.insert(2);
treeMaxHeap.insert(1);
// console.log(treeMaxHeap);

const treeMaxHeap2 = new MaxBinaryHeap()
treeMaxHeap2.insert(7);
treeMaxHeap2.insert(8);
treeMaxHeap2.insert(6);
treeMaxHeap2.insert(2);
treeMaxHeap2.insert(4);
treeMaxHeap2.insert(3);
treeMaxHeap2.insert(1);
// console.log(treeMaxHeap2);

// looking for largest value within heap. Instantiate constant to hold value. Compare to all other elements in values array. Repalce with largest number. If valid Max Binary heap. should be the first element in the heap heap.values[0]
const maxValue = (heap) => {
    let idx = 0;
    let curVal = heap.values[idx]
    let length = heap.values.length;
    let max = 0;
    for (let i =0; i < length; i++) {
        if (curVal > max) {
            // console.log(curVal)
            max = curVal
            continue
        }
    }
    return max
}
console.log(maxValue(treeMaxHeap)); // 6
console.log(maxValue(treeMaxHeap2)); // 8

//Challenge3: 
//Given the following min binaray heap tree, create a function call minValue() that returns the value of the smallest number in the tree
//should be the root or heap.values[0]

let minBinaryHeap = [1,3,2,4,6,5]
const minValue = (heap) => {
    let i;
    let curVal = heap[i]
    let minVal = heap[0]
    for ( i = 0; i < heap.length ; i++) {
        if (curVal < minVal) {
            minVal = curVal
        }
    }
    return minVal;
}
console.log(minValue(minBinaryHeap)); // 1



// Challenge4: 
//Given the following binary heap tree, create a function called isMaxHeap(heap) that accepts a heap as an argument, and it should return true or false if its a valid max heap tree
// exampleHeap = [6,5,3,4,2,1] // => true

let exampleHeap = new MaxBinaryHeap()
exampleHeap.insert(6);
exampleHeap.insert(5);
exampleHeap.insert(3);
exampleHeap.insert(4);
exampleHeap.insert(2);
exampleHeap.insert(1);

console.log(exampleHeap);

const isMaxHeap = (heap) => {
    // assess values in the array and check if the values follow the necessary parent - child relationship - all children must be less than that of their parents. 
    if (!heap.length) return false
    
    for (idx = 0 ; idx < heap.length; idx++) {
        let parent = heap[idx];

        let leftChildIdx = Math.floor((idx * 2) + 1);
        let leftChild = heap[leftChildIdx];

        let rightChildIdx = Math.floor((idx * 2) + 2);
        let rightChild = heap[rightChildIdx];
        // console.log(leftChild)
        // console.log(rightChild)

        if( leftChild > parent || rightChild > parent) return false
        else{
            continue
        }
    }
    return true
}

console.log(isMaxHeap([6,5,3,4,2,1])); // true
console.log(isMaxHeap([1,2,3,4,5,6])); // false 
console.log(isMaxHeap([41,39,33,18,27,12])); // true






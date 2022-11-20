//thought process:
// make helper functions and recursive mergeSort pseudo code
// build on pseudo Code

//helper swap function
    //function takes in 3 args. array and two index positions. swap values at two positions
    const swap = (arr, index1, index2) => {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }

//helper pivot function 
    //sets pivot, arrange smaller values on left and larger values on right of pivot; and return index of pivot 
    
    //loop through the array 
    const pivot = (arr, start = 0, end = arr.length-1) => {
        //set pivot as start of array
        let pivotValue = arr[start]
        //store current pivot index in variable 
        let swapIndex = start

        //iterate through array starting with first element AFTER pivot to compare all values in array with pivot
        for (let i = start+1; i <= end; i++) {
            //if pivot is greater than the current element;
            if (pivotValue > arr[i]) {
                 //increment the pivot index variable & then swap the current element with the element at the pivot index
                swapIndex++;
                swap(arr, swapIndex, i )
            }   
        }
        //after interating through whole array, swap the current element with the element at the pivot index
        swap(arr, start, swapIndex);
        //return pivot index
        return swapIndex;
    }



//quicksort: 

//recursively call pivot helper on subarrays( left and right )

const quickSort = (arr, start = 0, end = arr.length-1) => {
    //base case : subarray with less than 2 elements
    if (arr.length <= 2) return arr
    //call pivot helper on array
    if (start < end) {
        let pivotIndex = pivot (arr, start, end);

        //recursive call on left
        quickSort(arr, start, pivotIndex - 1)
        //recursive call on right
        quickSort(arr, pivotIndex + 1, end)
    }
    return arr;
}

const arr1= [17,2,3,22,9,5,4]
console.log(quickSort(arr1))
console.log(quickSort(['x','b','a','c','y','L','A']))
console.log(quickSort([2,23,15,43,34,62,10,5,102,54,13]))
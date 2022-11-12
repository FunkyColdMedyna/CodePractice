// Merge sort
// 1. Create an empty array, take a look at the smallest values in each input array

// 2. While there are still values we haven't looked at...

// 3. If the value in the first array is smaller than the value in the second array, 
// push the value in the first array into our results and move on to the next value in the first array

// 4. If the value in the first array is larger than the value in the second array, 
// push the value in the second array into our results and move on to the next value in the second array

// 5. Once we exhaust one array, push in all remaining values from the other array

// 6. Break up the array into halves until you have arrays that are empty or have one element

// 7. Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array

// 8. Once the array has been merged back together, return the merged (and sorted!) array

// start with helper function to perform merge
// takes in two halves (left and right or arr1 & arr2)
const merge = (arr1, arr2 ) => {
    let temp = [];
    let i = 0;
    let j = 0;

    // while there are still values we haven't examined 
    while( i < arr1.length && j < arr2.length) {
        // if first item in arr1 is smaller than first item in arr2 than add the smaller item from arr1 to the temp array. then increment i
         if( arr1[i] < arr2[j]) {
             temp.push(arr1[i])
             i++ ;
            //  otherwise the element in the second array is bigger so push that in to temp and increment j
         } else {
            temp.push(arr2[j])
            j++
        }   
    }
    // if we have exhausted all of the items in one array push the remainder of the other array into temp
    while (i < arr1.length) {
        temp.push(arr1[i])
        i++;
    }
    while (j < arr2.length) {
        temp.push(arr2[j])
        j++;
    }
    return temp;
}

//recursive merge sort

const mergeSort = (arr) => {
    // edge case - if array is 1 or less item its already sorted
    if(arr.length <=1 ) return arr;

    //declare your middle point 
    let mid = Math.floor(arr.length/2);
    //declare left half through slicing original array stoppping at mid point
    let left = mergeSort(arr.slice(0, mid));
    // declare right by slicing remainder of array
    let right = mergeSort(arr.slice(mid));
    //return merged left and right with help of merge helper function
    return merge(left, right); 
}

console.log(mergeSort([2,5,1,21,19,99,107,7]));
console.log(mergeSort(['x', 'a', 'c', 'z', 'b', 'f', 'k']));

//l 1, 2,3,4,5,  6, 7, 8
//i 0, 1,2,3, 4, 5, 6, 7
// [2,5,1,21,19,99,107,7]
// 

// mergeSort([2,5,1,21,19,99,107,7])
// passes edge case test
// mid = 8/2 = 4
// left = mergesort ([2,5,1,21]) // non-inclusive of ending position in slice
//      passes edge case larger than 1 item 
//      mid = 2
//      left = mergeSort([2,5]) // 
//              passes edge case array is larger than 1
//              mid = 1
//              left = mergeSort([2])
//              right = mergeSort([5])
//              return merge(left, right)
//                  returns[2,5]
//      right = mergeSort([1,21])
//      return merge( left, right) 
// right = mergesort ([19,99,107,17])
//

// return merge left & right 
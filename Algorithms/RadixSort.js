// Radix Sort - sort array by decimal place as key until every digit place is sorted. 
// use helper functions: getDigit, digitCount, mostDigits

//const getDigit -> tells you what digit is at the given decimal place starting from the right most number or the "ones place"
const getDigit = ( num, i ) => {
    // option a -> parseInt
    // const stringNum = JSON.stringify(num)
    // return parseInt(stringNum[i])

    // option b -> Math.floor(Math.abs(num))
    return Math.floor(Math.abs(num) / Math.pow(10, i) % 10)
}
// console.log(getDigit(1234, 0)); //4
// console.log(getDigit(123456789, 1)); //8


//const digitCount (num) --> returns how many digits are in the number
const digitCount = (num) => {
    //edge case 
    if (num === 0 ) return 1

    // option A
    //stringify and check length 
    // let stringNum = JSON.stringify(num);
    // return stringNum.length;

    // option B
    // absolute value of number 
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
// console.log(digitCount(1234)); //4
// console.log(digitCount(123456789)); //9

// const mostDigits --> find what the largest amoutn of digits in the given array of numbers 

const mostDigits = (nums) => {
    // instatiate variable to hold max value; start at 0 and compare against each value in the array and replace with whatever is bigger
    let maxDigits = 0;
    for ( let i = 0 ; i < nums.length ; i++ ) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits
}

// console.log(mostDigits([1,12,123,1234,12345])); //5
// console.log(mostDigits([1,12,123,1234,12345, 123456, 1234567, 12345678, 123456789])); //9


//Radix Sort 
//// 1. Define a function accepts list of numbers
// 2. Figure out how many digits the largest number has
// 3. Loop from k = 0 up to this largest number of digits
// 4. For each iteration of the loop: 
// 4.1 Create buckets for each digit (0 to 9)
// 4.2 Place each number in the corresponding bucket based on its kth digit
// 4.3 Replace our exisiting array with values in our buckets, starting with 0 and going up to 9
// 5. Return the array at the end!

//step 1 define function 
const RadixSort = (nums) => {
//     //step 2 figure out how many decimal places / iterations of bucket sorting
    let maxDigitCount = mostDigits(nums);
        //step 3 set up intial for loop constraint is how many deciaml places on MaxDigitCount
    for (let k = 0; k < maxDigitCount; k++ ) {
        //step 4.1 create buckets of empty arrays 
        let digitBuckets = Array.from( { length: 10 }, () => [])

        // step 4.2 iterate through each value in the array and place in bucket that corespongs to the number at the given iteration of deciaml places (k)
        for ( let i = 0; i < nums.length; i++ ) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i])
        }
        //step 4.3 spread out values and return to one single array
        nums = [].concat(...digitBuckets);
    }
    //step 5! return final array
    return nums
}

console.log(RadixSort([33,21,1,89,69,66,600,99,72,272,420420]));
console.log(RadixSort([3,37,78,56,600,299,2424,6060,30000,9001]));
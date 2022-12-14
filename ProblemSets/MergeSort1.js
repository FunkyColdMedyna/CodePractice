// Description: Congratulations! You were just hired to be a junior backend engineer at Hanawilo! As the first 
// task at Hanawilo, your manager has asked you to implement a sorting algorithm using the Merge sort of the 
// payloads coming back from the MongoDB database. The website currently is running a very slow sorting 
// algorithm and it is driving away customers due to the slowness, therefore, as your first task, he has assigned 
// you to rewrite the sorting algorithm for this payload returned from the MongoDB API fetch call.  
 
// He has asked to return the following data in two sorting options:  
// 1. Merge sort (ascending order) by the rank 
// 2. Merge sort (ascending order) by the ratings AND rank 

const data = [ 
    { 
        results: { 
            payload: [ 
                { 
                    profile: { 
                        name: 'Tony',  
                        rank: 9,  
                        favorites: [ 
                            { 
                                title: 'Spider-Man',  
                                rating: 5 
                            }, 
                            { 
                                title: 'Pirates of the Caribbean',  
                                rating: 9 
                            } 
                        ] 
                    } 
                } 
            ],  
            payload: [ 
                { 
                    profile: { 
                        name: 'Jenny',  
                        rank: 3,  
                        favorites: [ 
                            { 
                                title: 'Top Gun',  
                                rating: 7 
                            }, 
                            { 
                                title: 'Mavericks',  
                                rating: 3 
                            } 
                        ] 
                    } 
                } 
            ] 
        } 
    } 
] 

//merge helper function for both 
function merge (left, right) {
    let results = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            results.push(left[i]);
            i++;
        } else {
            results.push(right[j]);
            j++;
        }
    } 
    while ( i < left.length) {
        results.push(left[i])
        i++;
    }
    while (j < right.length) {
        results.push(right[j]);
        j++
    }
    return results;
}

console.log(merge([3],[5]));
console.log(merge([5],[3]));


//'regular' merge sort on an array 
function mergeSort(arr){
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
} 

console.log(mergeSort([10,69,2,12,33,99,1]));
console.log(data[0].results) // payload : [ { profile : [object]}]
console.log(data[0].results.payload[0]); // profile -> jenny
console.log(data[0].results.payload[0].profile.rank); // 3
console.log(data[0].results.payload[0].profile.favorites) //[ {top gun},  {mavericks}]
console.log(data[0].results.payload[0].profile.favorites[0].rating) //7

let collection = [];

for ( let i in data[0].results) {
    collection.push(data[0].results[i])
}
collection.flat(0)
console.log(collection)




//helper function to compare values? 
// const compare  = ( a , b) => {

// }

// const mergeSortPayload = ( data ) => {
//     //instantiate collection to perform merge sort on? 
//     let collection = [];

//     if ( profile.rank[payload1] < profile.rank[payload2]) {
//         collection.push([payload1])
//     } else { 
//         collection.push([payload2])
//     }
//     //do something
//     return collection;
// }

// mergeSortPayload(data);

//ascending order -> rank only 
// const mergeSort = (data) => {
//     //data.results -> payloads ordered by (((data.results.payload.profile.rank)))

//     // if (data.results.payload.length <= 1) return data.results.payload
//     let mid = Math.floor(data.results.payload.length / 2)

//     let left = mergeSort(data.results.payload.slice(0, mid))
//     let right = mergeSort(data.results.payload.slice(mid))

//     return merge(left, right)
// }

// //ascending order --> rank parent (within each user object sorted by rating)
// const mergeSortRanked = (data) => {

// }

// console.log(mergeSort(data));
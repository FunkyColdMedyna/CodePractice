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
const merge = (left, right) => {
    let sortedArr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    } 
    return [...sortedArr, ...left, ...right]
}

//ascending order -> rank only 
const mergeSort = (data) => {
    //data.results -> payloads ordered by (((data.results.payload.profile.rank)))

    if (data.results.payload.length <= 1) return data.results.payload
    let mid = Math.floor(data.results.payload.length / 2)

    let left = mergeSort(data.results.payload.slice(0, mid))
    let right = mergeSort(data.results.payload.slice(mid))

    return merge(left, right)
}

//ascending order --> rank parent (within each user object sorted by rating)
const mergeSortRanked = (data) => {

}

console.log(mergeSort(data));
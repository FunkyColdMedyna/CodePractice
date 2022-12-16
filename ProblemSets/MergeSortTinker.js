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

let newData = data[0];
console.log(newData);

let newResults = data[0].results
console.log(newResults)

let profile1 = data[0].results.payload
console.log(profile1)

let profile2 = data[0].results['payload'][0].profile
console.log(profile2) // jenny

// let base = data[0].results
// console.log(base)

// let collection = []
// console.log(collect(data));
// console.log(collection)

// let movies = data[0].results['payload'][0].profile.favorites
// console.log(movies)


// console.log(data[0])
// console.log(data[0].results)
// console.log(data[0].results.payload[0]) // profile.
// console.log(data['results'])

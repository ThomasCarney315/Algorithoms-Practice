/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/


function mergeArrays(...arrays) {
    let result = arrays.reduce((acc, x) => acc.concat(x),[])
    return [...new Set([...result])]
    // return Array.from(new Set([...result]))
}

// function mergeArrays(...arrays) {

//     let jointArray = []
    
//     arrays.forEach(array => {
//         jointArray = [...jointArray, ...array]
//     });

//     return [...new Set([...jointArray])]
// }

// function mergeArrays(...arrays) {
//     let jointArray = []

//     arrays.forEach(array => {
//         jointArray = [...jointArray, ...array]
//     })
//     const uniqueArray = jointArray.filter((item,index) => jointArray.indexOf(item) === index)
//     return uniqueArray
// }

// function mergeArrays(...arrays) {
//     let jointArray = arrays.reduce((acc, x) => acc.concat(x), [])
//     let uniqueArray = jointArray.reduce((acc, x) => acc.includes(x) ? acc : [...acc, x], [])
//     return uniqueArray
// }

module.exports = mergeArrays
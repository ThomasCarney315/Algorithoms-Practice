/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/



// function isAnagram(stringA, stringB) {
//     stringA = stringA.toLowerCase()
//     stringB = stringB.toLowerCase()
//     let cleanA =  stringA.split('').map(x => x.charCodeAt(0) > 96 && x.charCodeAt(0) < 123 ? null : x ).sort().join('')
//     let cleanB =  stringB.split('').map(x => x.charCodeAt(0) > 96 && x.charCodeAt(0) < 123 ? null : x ).sort().join('')

//     return cleanA == cleanB
// }

// function isAnagram(stringA, stringB) {
//     stringA = stringA.toLowerCase()
//     stringB = stringB.toLowerCase()
//     let cleanA =  stringA.replace(/[^a-z\d]/g, '').split('').sort().join('')
//     let cleanB =  stringB.replace(/[^a-z\d]/g, '').split('').sort().join('')

//     return cleanA == cleanB
// }

// function isAnagram(stringA, stringB) {
//     const sanitizeString = function (str) {
//         return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
//     }
//     return sanitizeString(stringA) == sanitizeString(stringB)
// }

function isAnagram(stringA, stringB) {
    
    function createCharMap(str) {
        let charMap = {}
        
        for (let char of str) {
            if (charMap.hasOwnProperty(char)) {
                charMap[char]++
            }
            else {
                charMap[char] = 1
            }
        }
        return charMap
    }

    let trueFalse = true
    stringA = stringA.toLowerCase().replace(/[^a-z\d]/g, '')
    stringB = stringB.toLowerCase().replace(/[^a-z\d]/g, '')
    
    if (stringA.length !== stringB.length) {return false}

    mapA = createCharMap(stringA)
    mapB = createCharMap(stringB)

    for (let char in mapA) {
        if (mapA[char] != mapB[char]) {
            trueFalse = false
        }
    }
    return trueFalse
}
module.exports = isAnagram
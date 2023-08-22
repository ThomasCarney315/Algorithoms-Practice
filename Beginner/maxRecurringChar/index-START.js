/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/



function maxRecurringChar(text) {
    let charMap = {}
    let maxValue = 0
    let maxChar = ''
    // let charArray = []
    // let valuesArray = []

    for (let char of text) {
        if (charMap.hasOwnProperty(char)) { //alternative if statement (char in charMap)
            charMap[char] ++
        }
        else {
            charMap[char] = 1
        }
    }

    for (let char in charMap) {
        if (charMap[char] > maxValue) {
            maxValue = charMap[char]
            maxChar = char
        }
    }

    // charArray = Object.keys(charMap)
    // valuesArray = Object.values(charMap)
    // maxValue = Math.max(...valuesArray)
    // maxChar = charArray[valuesArray.indexOf(maxValue)]
    
    return maxChar
}



module.exports = maxRecurringChar;
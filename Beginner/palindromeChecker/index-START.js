/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/




// function palindromeChecker(text) {
//     text.toLowerCase()
//     return text === text.split('').reverse().join('')
// }

// function palindromeChecker(text) {
//     let charArr = text.toLowerCase().split('')

//     return charArr.every((char, idx) => {
//         return char === charArr[charArr.length - idx - 1]
//     })
// }

//this method only interates half of the string to safe time
function palindromeChecker(text) {
    let len = text.length
    for (let i = 0; i < len / 2; i++) {
        if (text[i] !== text[len - i - 1])
            return false
    }
    return true
}


module.exports = palindromeChecker;
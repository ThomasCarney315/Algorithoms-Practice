/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


// function vowelsCounter(text) {
//     let vowels = 'aeiou'.split('')
//     return text.toLowerCase().split('').filter(char => vowels.includes(char)).length
// }

// function vowelsCounter(text) {
//     let vowels = ['a', 'e', 'i', 'o', 'u']
//     let counter = 0
//     for (let char of text.toLowerCase()) {
//         if (vowels.includes(char)){
//             counter++
//         }
//     }
//     return counter
// }

function vowelsCounter(text) {
    const matches = text.match(/[aeiou]/gi)
    return matches.length
}

module.exports = vowelsCounter;

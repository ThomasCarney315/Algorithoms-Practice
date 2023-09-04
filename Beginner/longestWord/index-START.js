/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function longestWord(text) {
    let words = text.split(' ')
    let longestWordIndex = 0 
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > words[longestWordIndex].length``) {
            longestWordIndex = i
        }
    }
    return words[longestWordIndex]
}

// function longestWord(text) {
//     let words = text.split(' ')
//     let lengths = words.map(word => word.length)
//     let indexOfMax = lengths.indexOf(Math.max(...lengths))

//     return words[indexOfMax]
// }

// function longestWord(text) {
//     return text.split(' ').reduce((longest, current) => current.length > longest.length ? current : longest) 
    
// }

// function longestWord(text) {
//     let words = text.split(' ')
//     words.sort((a,b) => b.length - a.length)
//     return words[0]
// }

module.exports = longestWord
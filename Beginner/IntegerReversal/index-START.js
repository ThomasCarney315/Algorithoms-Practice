/* CHALLENGE
Given an integer, return an integer that is the reverse 
ordering of that which was received. E.g
    reverseInteger(-123) // should return -321
*/


// function reverseInteger(int) {
//     let neg = int < 0 ? true : false
//     let revNum = int.toString().split('').reverse().join('')
//     revNum = Number.parseInt(revNum)
//     return neg ? revNum * -1 : revNum 
// }

// Reverses a string
function reverseString(text) {
    return [...text].reduce((acc, char) => char + acc, '')
}

// Reverses an integer
function reverseInteger(num) {
    let reversedNumber = parseInt(reverseString(num.toString()))

    return (reversedNumber * Math.sign(num))
}




module.exports = reverseInteger;

/*
Translate the provided string to pig latin by following the rules below:

- For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed. E.g  
  - "pig" = "igpay"
- For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed. E.g  
  - "glove" = "oveglay"
-  For words that begin with vowel sounds, simply add "way" to the end of the word. E.g
  - "explain" = "explainway”
*/

function pigLatin(str) {
  if ('aeiou'.includes(str[0])) {
    return str + 'way'
  }

  let consonantCount = 0
  for (let i = 0; i < str.length; i++) {
    if (!'aeiou'.includes(str[i])) {
      consonantCount++
    }
    else {
      break
    }
  }

  return str.slice(consonantCount) + str.slice(0, consonantCount) + 'ay'
}

// function pigLatin(str) {
//   return str
//   .replace(/^([aeiouy])(._)/, '$1$2way')
//   .replace(/^(_[_^aeiouy]+)(._)/, '$2$1ay')
// }

module.exports = pigLatin;

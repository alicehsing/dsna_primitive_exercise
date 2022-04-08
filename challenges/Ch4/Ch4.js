// Input: 'superintended', 'unpredestined' // Output: true
// Input: 'pictorialness', 'documentarily'	// false


function anagrams(wordOne, wordTwo) {
  const firstWord = wordOne.split('').sort().join('');
  const secondWord = wordTwo.split('').sort().join('');

  if (firstWord === secondWord) {
    return 'true';
  } else {
    return 'false';
  }
}
console.log(anagrams('superintended', 'unpredestined'));
console.log(anagrams('pictorialness', 'documentarily'));



// const orderLetters = (word) => word.split('').sort().join('');
// function anagrams(wordOne, wordTwo) {
//   return orderLetters(wordOne) === orderLetters(wordTwo);
// }
// console.log(anagrams('superintended', 'unpredestined'));
// console.log(anagrams('pictorialness', 'documentarily'));

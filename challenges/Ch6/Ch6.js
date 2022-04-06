// Input: 'abdacabad'	
// Output: 'c'

// Input: 'abacabaabacaba'
//Output: '_'

// Input: 'abacabade'
// Output: 'c'

function uniqueChar(string) {
  // turn strings into an array of individual character and sort the characters in order
  const chars = string.split('').sort();
  console.log(chars);
  // loop through the array, checking for a non-repeating character
  for (let i = 0; i < chars.length; i++) {
    const current = chars[i];
    const previous = chars[i - 1];
    const next = chars[i + 1];
    // if both previous and next indexes are NOT the same, return current index (the unique character)
    if (current !== previous && current !== next) return current;
  }
  
  // if there is no unique character (more than one of the same character), return "_"
  return '_';
  
}
  
console.log(uniqueChar('abdacabad'));
console.log(uniqueChar('abacabaabacaba'));
console.log(uniqueChar('abacabade'));
  
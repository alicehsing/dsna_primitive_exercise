// Input: 'alchemy ROCKS goLD'
// Output: 'Alchemy Rocks Gold'

const sentence = 'alchemy ROCKS goLD';
function titleCase(sentence) {
  return sentence
    .split(' ')
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}
console.log(titleCase(sentence));

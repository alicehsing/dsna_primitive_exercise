//Input: "Here is a Sentence"
//Return: "ereH si a ecentneS"

const sentence = 'Here is a long sentence';
function reverseWords(sentence) {
  return sentence 
    .split(' ')
    .map((word) => {
      return word.split('').reverse().join('');
    })
    .join(' ');
} 

console.log(reverseWords(sentence));

// Input: 121
// Output: 'Evenish'

function oddishOrEvenish(number) {
  const sumOfDigits = number
    .toString()
    .split('')
    .map((digit) => Number(digit))
    .reduce((sum, num) => sum + num);
      
  return sumOfDigits % 2 ? 'Oddish' : 'Evenish';
}
console.log(oddishOrEvenish(41));

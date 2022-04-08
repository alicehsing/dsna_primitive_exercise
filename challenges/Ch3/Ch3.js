// Input: 16
// Output: [1, 2, 'Fizz', 4, 'Buzz','Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16];

function fizzBuzz(number) {
  const array = [];
  
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push('FizzBuzz');
    } else if (i % 3 === 0) { 
      array.push('Fizz');
    } else if (i % 5 === 0) {
      array.push('Buzz');
    } else { 
      array.push(i);
    }
  }
  return array;
}
  
console.log(fizzBuzz(16));

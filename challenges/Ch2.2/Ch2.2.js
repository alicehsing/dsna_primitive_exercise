// Input: ['a', 'b', 'c', 'd', 'e'], 2 = 'c'
// Output: ['a', 'b', 'c', 'd', 'e'], -2 = 'd'

function at(arr, index) {
  if (index > -1) {
    return arr[index];
  } else {
    return arr[arr.length + index];
  }
}
console.log(at(['a', 'b', 'c', 'd', 'e'], 2));
console.log(at(['a', 'b', 'c', 'd', 'e'], -2));

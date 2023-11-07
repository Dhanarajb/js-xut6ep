// Reverse a string but spaces must be at actual position.
// Complexity - no use of third array
// "Example 1:
// Input::     I LIVE IN INDIA
// Output:: A IDNI NI EVIL

function reverseString(str) {
  // let reverse = str.split('').reverse().join('');

  // return reverse;
  let splitAnArray = str.split(' ');
  let reverse = splitAnArray
    .reverse()
    .map((char) => {
      return char.split('').reverse().join('').toUpperCase();
    })
    // .map((char) => {
    //   let firstLetter = char.charAt(0).toUppperCase();
    //   let restOfWords = char.slice(1).toLowerCase();
    //   return firstLetter + restOfWords;
    // })
    .join(' ');
  return reverse;
}

const input = 'I LIVE IN INDIA';
const output = reverseString(input);
console.log(output);
// const result = reverseString('I LIVE IN INDIA ');
// console.log(reverseString('I LIVE IN INDIA'));

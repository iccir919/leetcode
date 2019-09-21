/*

Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:

n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]

*/

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let counter = 1;
  let result = [];
  while (counter <= n) {
    let message = "";
    if (counter % 3 === 0) {
      message += "Fizz";
    }
    if (counter % 5 === 0) {
      message += "Buzz";
    }
    if (message.length === 0) {
      result.push("" + counter);
    } else {
      result.push(message);
    }
    counter++;
  }
  return result;
};

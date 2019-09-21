/*

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  var letters = s.match(/[A-Za-z0-9]/g);
  if (letters === null) return true;
  letters = letters.map(letter => letter.toLowerCase());
  for (let i = 0; i < Math.round(letters.length / 2); i++) {
    if (letters[i] !== letters[letters.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

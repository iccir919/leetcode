/*

Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    x = '' + x;
    let negative = false;
    
    if (x[0] === '-') {
        negative = true;
        x = x.split('').slice(1);
    } else {
        x = x.split('');
    }
    
    x.reverse();
    while(x[0] === '0') {
        x = x.slice(1);
    }
    
    x = x.join('');
    
    x = Number(x);
    
    if (x >= 2147483648) {
        return 0;
    }
    
    if(negative) {
        return Number(x * -1)
    } else {
        return Number(x);
    }

    
};

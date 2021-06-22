/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
  const result = [];
  digits = digits.reverse();
  digits[0] ++;
  for(let i = 0; i < digits.length; i++) {
      if(digits[i] >= 10) {
          digits[i] = digits[i] % 10;
          digits[i + 1] = (digits[i+1] || 0) + 1;
      }
  }
  return digits.reverse();
};
// @lc code=end

// var plusOne = function(digits) {
//     for (let i = digits.length - 1; i>=0; i--) {
//         if (digits[i] !== 9) {
//             digits[i] ++;
//             return digits;
//         } else {
//             digits[i] = 0;
//         }
//     }
//     digits.unshift(1);
//     return digits;
// };

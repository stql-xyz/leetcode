/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
  if (x < 0 || x % 10 === 0) return false;
  if (x === 0) return true;
  let y = 0;
  while(x > y) {
    y = y * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  console.log(y, x);
  return y === x || (x === Math.floor(y / 10))
};
// @lc code=end

console.log(isPalindrome(10))

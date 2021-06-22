/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const isNeg = x > 0 ? 1 : -1;
  x = Math.abs(x);

  let y = 0;
  while (x !== 0) {
    y = (x % 10) + y * 10;
    x = Math.floor(x / 10);
  }
  y = isNeg * y;
  if (y > Math.pow(2, 31) - 1) return 0;
  if (y < Math.pow(-2, 31)) return 0;
  return y;
};
// @lc code=end

// var reverse = function(x) {
//   let y = 0;
//   while (x !== 0) {
//     y = (x % 10) + y * 10;
//     x = Math.trunc(x / 10);
//   }
//   if (y > Math.pow(2, 31) - 1) return 0;
//   if (y < Math.pow(-2, 31)) return 0;
//   return y;
// };

// var reverse = function(x) {
//   const is_neg = x > 0 ? 1 : -1;
//   x = Math.abs(x);
//   x = x.toString().split('').reverse().join('');
//   x = Number(x);
//   if (x > Math.pow(2, 31) - 1) return 0;
//   if (x < Math.pow(-2, 31)) return 0;
//   return is_neg * x;
// };


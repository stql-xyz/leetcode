/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // nums[i]及之前是都不等于val的数据
  // 遍历寻找第一个想的的数据和之后第一个不想等的数据交换
  let i = 0, j = 0;
  while(i < nums.length && j < nums.length) {
    if (nums[i] !== val) {
      i ++; j ++; continue;
    }
    if (nums[i] === nums[j]) {
      j ++; continue;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  return i;
};
// @lc code=end

// var removeElement = function (nums, val) {
//   let j = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[j++] = nums[i];
//     }
//   }
//   return j;
// };

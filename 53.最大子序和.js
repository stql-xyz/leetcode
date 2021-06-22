/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum = Number.NEGATIVE_INFINITY, max = Number.NEGATIVE_INFINITY;
  for(let i = 0; i< nums.length; i++) {
    sum = Math.max(sum + nums[i], nums[i]);
    max = Math.max(max, sum);
  }
  return max;
};
// @lc code=end

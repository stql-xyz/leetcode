/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  nums.push('a');
  let n = 0;
  for (let i = 1; i < nums.length; i++) {
      if (nums[n] == nums[i]) continue;
      nums[++n] = nums[i];
  }
  return n;
};
// @lc code=end

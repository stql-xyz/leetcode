/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const temp = {};
    for (let i = 0; i < nums.length; i++) {
      const left = target - nums[i];
      // 比直接使用 temp[left] !== undefined 更高效率
      if (temp.hasOwnProperty(left)) {
        return [temp[left], i];
      }
      temp[nums[i]] = i;
    }
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  const total = m + n;
  for (let i = 0; i < m; i++) {
    nums1[total - i - 1] = nums1[m - i - 1];
  }
  let l1 = n, l2 = 0;
  for (let i = 0; i < nums1.length; i++) {
    if (nums1[l1] === undefined) {
      nums1[i] = nums2[l2++];
    } else if (nums2[l2] === undefined) {
      nums1[i] = nums1[l1++];
    } else {
      if (nums1[l1] > nums2[l2]) {
        nums1[i] = nums2[l2++];
      } else {
        nums1[i] = nums1[l1++];
      }
    }
  }
  return nums1;
};
// @lc code=end

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));

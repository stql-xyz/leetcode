/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1); // 保证数组nums1的长度比较小
    const n1 = nums1.length,
        n2 = nums2.length;
    let low = 0,
        hight = n1;
    while (low <= hight) {
        const px = Math.floor((low + hight) / 2);
        const py = Math.floor((n1 + n2 + 1) / 2) - px;

        const maxLeft1 = px === 0 ? Number.NEGATIVE_INFINITY : nums1[px - 1];
        const minRight1 = px === n1 ? Number.POSITIVE_INFINITY : nums1[px];

        const maxLeft2 = py === 0 ? Number.NEGATIVE_INFINITY : nums2[py - 1];
        const minRight2 = py === n2 ? Number.POSITIVE_INFINITY : nums2[py];

        console.log(maxLeft1, maxLeft2, minRight1, minRight2)

        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            if ((n1 + n2) % 2 === 0) {
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
            } else {
                return Math.max(maxLeft1, maxLeft2);
            }
        } else if (maxLeft1 > minRight2) {
            hight = px - 1;
        } else {
            low = px + 1;
        }
    }
};
// @lc code=end
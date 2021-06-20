/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // 如何一次遍历成功
    let i = 0, j = height.length -1, max = -1;
    while(i < j) {
        const max_h = Math.min(height[i], height[j]);
        const area = (j - i) * max_h;
        if (area > max) max = area;
        if (height[j] < height[i]) j--;
        else i++;
    }
    return max;
};
// @lc code=end

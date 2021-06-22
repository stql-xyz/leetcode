/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const result = [];
  for(let i = 0; i < numRows; i++) {
      if (i === 0) result.push([1]);
      else {
          const item = [1];
          for(let j = 0; j<result[i - 1].length - 1; j++) {
              item.push(result[i - 1][j] + result[i - 1][j+1]);
          }
          item.push(1);
          result.push(item);
      }
  }
  return result;
};
// @lc code=end

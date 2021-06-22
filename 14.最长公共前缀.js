/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) return '';
  const start_str = strs[0];
  let str = '';
  for(let i = 0; i < start_str.length; i++) {
      let temp = start_str[i];
      for (let j = 1; j < strs.length; j++) {
          if (i >= strs[j].length || strs[j][i] !== start_str[i]) {
            return str;
          }
      }
      str += temp;
  }
  return str;
};
// @lc code=end

console.log(longestCommonPrefix([]));


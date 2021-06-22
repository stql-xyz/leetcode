/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const s_arr = [];
  const map = {
      "(" : ")",
      "{" : "}",
      "[" : "]",
  };
  for(let i = 0; i< s.length; i++){
      const last = s_arr.length > 0 ? s_arr[s_arr.length - 1] : '';
      if (map[last] === s[i]) {
          s_arr.pop();
      } else if (last === undefined) return false
      else s_arr.push(s[i]);
  }
  return s_arr.length === 0;
};
// @lc code=end


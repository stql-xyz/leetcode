/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let end_space = 0, end_flag = true;
  for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] !== " ") end_flag = false;
      if (end_flag && s[i] === " ") end_space ++;
      if (!end_flag && s[i] === " ") return s.length - 1 - i - end_space;
      if (!end_flag && i === 0) return s.length - i - end_space;
  }
  return 0;
};
// @lc code=end


console.log(lengthOfLastWord("jalf helo fasd"));

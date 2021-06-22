/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const e1 = new ListNode(4);
const e2 = new ListNode(2, e1);
const e3 = new ListNode(1, e2);

const d1 = new ListNode(4);
const d2 = new ListNode(3, d1);
const d3 = new ListNode(1, d2);


var mergeTwoLists = function(l1, l2) {
  const head = new ListNode();
  let point = head;
  while(l1 && l2) {
    if (l1.val > l2.val) {
        point.next = l2;
        point = l2;
        l2 = l2.next;
    } else {
        point.next = l1;
        point = l1;
        l1 = l1.next;  
    }
  }
  if (l1) point.next = l1;
  if (l2) point.next = l2;
  return head.next;
};

mergeTwoLists(e3, d3);

// @lc code=end




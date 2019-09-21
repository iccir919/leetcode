/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (l1 === null && l2 === null) return null;

  let head;
  let p3;

  let p1 = l1;
  let p2 = l2;

  if (l1 === null) {
    head = l2;
    p3 = l2;
    p2 = l2.next;
  } else if (l2 === null) {
    head = l1;
    p3 = l1;
    p1 = l1.next;
  } else if (l1.val <= l2.val) {
    head = l1;
    p3 = l1;
    p1 = l1.next;
  } else {
    head = l2;
    p3 = l2;
    p2 = l2.next;
  }

  while (p1 || p2) {
    if (p1 && p2) {
      if (p1.val <= p2.val) {
        p3.next = p1;
        p3 = p3.next;
        p1 = p1.next;
      } else {
        p3.next = p2;
        p3 = p3.next;
        p2 = p2.next;
      }
    } else if (p1) {
      p3.next = p1;
      p3 = p3.next;
      p1 = p1.next;
    } else {
      p3.next = p2;
      p3 = p3.next;
      p2 = p2.next;
    }
  }
  return head;
};

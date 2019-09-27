/*
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let list = [];
    
    if (head === null) return null;
    
    while (head) {
        list.push(head.val);
        head = head.next
    }
    list.reverse();
    
    let newHead = new ListNode(list[0]);
    let point = newHead;
    
    for(let i = 1; i < list.length; i++) {
        point.next = new ListNode(list[i]);
        point = point.next;
    }
    
    return newHead;
 };

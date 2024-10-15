/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head || !head.next) return;

    //find mid
    let fast=head;
    let slow=head;
    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    //break linked list
    let curr = slow.next;
    slow.next = null;

    //reverse the second linked list
    let prev = null;

    while(curr){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    
    //combine linked lists
    let h1= head;
    let h2= prev;


    while (h2) {
        let temp1 = h1.next; 
        let temp2 = h2.next; 
        h1.next = h2; 
        h2.next = temp1; 
        h1 = temp1; 
        h2 = temp2; 
    }
};
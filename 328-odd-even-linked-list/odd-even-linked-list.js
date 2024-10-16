/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(head === null || head.next === null) return head;
    let even = head.next;
    let odd = head;
    let ptr = even;
    while(even && even.next){
        odd.next = even.next;
        even.next = even.next.next;
        odd.next.next = ptr;
        odd= odd.next;
        even = even.next;
    }

    return head;
};
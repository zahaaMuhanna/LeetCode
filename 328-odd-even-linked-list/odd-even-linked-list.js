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

    let even = new ListNode(0);
    let odd = new ListNode(0);

    let evenPtr=even;
    let oddPtr=odd;

    let indx=1;

    while(head !== null){
        if(indx % 2 === 0){
            evenPtr.next=head;
            evenPtr = evenPtr.next;
        }else{
            oddPtr.next=head;
            oddPtr=oddPtr.next;
        }
        head=head.next;
        indx++;
    }
    evenPtr.next=null;
    oddPtr.next=even.next;

    return odd.next;
};
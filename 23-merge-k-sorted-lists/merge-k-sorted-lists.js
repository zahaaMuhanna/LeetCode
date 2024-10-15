/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let minHeap = [];
    for(let list of lists){
        if(list!==null) minHeap.push(list);
    }
    minHeap.sort((a,b)=>a.val - b.val);

    const dummy = new ListNode();
    let current = dummy;
    while(minHeap.length > 0){
        let smallestNode=minHeap.shift();

        current.next = smallestNode;
        current = current.next;

        if(smallestNode.next !== null ){
            minHeap.push(smallestNode.next);
            minHeap.sort((a,b)=> a.val-b.val );

        }
    }

    return dummy.next;
};
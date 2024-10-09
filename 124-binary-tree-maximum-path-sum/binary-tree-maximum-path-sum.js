/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let globalMax = -Infinity;

    function helperFun(node){

        if(!node) return 0;

        const rightMax = Math.max(helperFun(node.right),0);
        const leftMax = Math.max(helperFun(node.left),0);

        const currMax = node.val + leftMax + rightMax;

        globalMax = Math.max(globalMax,currMax);

        return node.val + Math.max(leftMax,rightMax);
    }
    helperFun(root);
    
    return globalMax;
};
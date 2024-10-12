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
 * @return {boolean}
 */

 function helperBST(node , min , max){
    if(!node) return true;

    if(node.val <= min || node.val >= max) return false;

    return helperBST(node.left,min,node.val) &&
           helperBST(node.right,node.val,max); 
 }
var isValidBST = function(root) {
    return helperBST(root , -Infinity,Infinity);
};
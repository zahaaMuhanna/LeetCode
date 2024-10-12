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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 function isIdentical(tree1, tree2){
        if(!tree1 && !tree2) return true;
        if(!tree1 || !tree2) return false;

        return (tree1.val === tree2.val) && 
                isIdentical(tree1.left,tree2.left) && 
                isIdentical(tree1.right,tree2.right);
    }
var isSubtree = function(root, subRoot) {

    if(!root) return false;

    if(isIdentical(root,subRoot)) return true;

    return isSubtree(root.left,subRoot) || isSubtree(root.right,subRoot);
};
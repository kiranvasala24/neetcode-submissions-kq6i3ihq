/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let inorderMap = new Map();
        for (let i = 0; i < inorder.length; i++){
            inorderMap.set(inorder[i], i);
        }
        this.preIndex = 0;
        return this.build(preorder, inorderMap, 0, inorder.length - 1);
    }
    build(preorder, inorderMap, inStart, inEnd){
        if (inStart > inEnd){
            return null;
        }
        let rootVal = preorder[this.preIndex];
        this.preIndex++;

        let root = new TreeNode(rootVal);
        let inIndex = inorderMap.get(rootVal);

        root.left = this.build(preorder, inorderMap, inStart, inIndex - 1);
        root.right = this.build(preorder, inorderMap, inIndex + 1, inEnd);

        return root;
    }
    
}

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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        let result = [];
        this.serializeDFS(root, result);
        return result.join(',');
    }
    serializeDFS(node, result){
        if (!node){
            result.push('null');
            return;
        }
        result.push(node.val.toString());

        this.serializeDFS(node.left, result);
        this.serializeDFS(node.right, result);
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        let values = data.split(',');
        this.index = 0;
        return this.deserializeDFS(values);

    }
    deserializeDFS(values){
        if (values[this.index] === 'null'){
            this.index++;
            return null;
        }
        let node = new TreeNode(parseInt(values[this.index]));
        this.index++;

        node.left = this.deserializeDFS(values);
        node.right = this.deserializeDFS(values);

        return node;
    }
}

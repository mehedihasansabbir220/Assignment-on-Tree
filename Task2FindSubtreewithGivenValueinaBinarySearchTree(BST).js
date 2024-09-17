/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * Find the subtree with the given value in a binary search tree.
 * @param {TreeNode} root - The root of the BST.
 * @param {number} val - The value to search for.
 * @return {TreeNode} - The subtree rooted with the node having the given value.
 */
function searchBST(root, val) {
    if (!root) return null;
    
    if (root.val === val) return root;

    if (val < root.val) return searchBST(root.left, val);
    
    return searchBST(root.right, val);
}

// Time Complexity: O(H), where H is the height of the tree (due to BST properties).
// Space Complexity: O(1), because the space is used by function calls on the call stack.

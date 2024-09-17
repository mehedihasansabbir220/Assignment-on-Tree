# Binary Tree and Binary Search Tree Solutions

This repository contains JavaScript solutions for two common binary tree problems:

1. **Finding the Height of a Binary Tree**
2. **Finding a Subtree with a Given Value in a Binary Search Tree**

## 1. Find the Height of a Binary Tree

### Function: `maxDepth`

**Description:**

Calculates the height of a binary tree. The height is defined as the number of nodes along the longest path from the root node to the farthest leaf node.

**Parameters:**

- `root` (`TreeNode`): The root node of the binary tree.

**Returns:**

- `number`: The height of the binary tree.

**Time Complexity:** O(N), where N is the number of nodes in the tree.

**Space Complexity:** O(H), where H is the height of the tree (recursion stack space).

### Example:

```javascript
const root = new TreeNode(3, 
    new TreeNode(9), 
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(maxDepth(root)); // Output: 3
```

## 2. Find the Subtree with a Given Value in a Binary Search Tree (BST)
Function: searchBST
Description:

Finds the subtree rooted at the node with the given value in a binary search tree.

Parameters:

root (TreeNode): The root node of the BST.
val (number): The value to search for.
Returns:

###  TreeNode: The subtree rooted with the node that has the given value. Returns null if the value is not found.
###  Time Complexity: O(H), where H is the height of the tree due to the BST properties.

###  Space Complexity: O(1), as only a constant amount of space is used.# Assignment-on-Tree

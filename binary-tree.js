/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.count = 0;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    let stack = [this.root];
    if (stack[0] === null) return 0;
    let min;

    while (stack.length) {
      let current = stack.pop();

      current.count += 1;


      if (current.right !== null) {
        current.right.count = current.count;

        stack.push(current.right)
      } else {

        if (current.count < min || min === undefined) min = current.count;
      }
      if (current.left !== null) {
        current.left.count = current.count;
        stack.push(current.left)
      } else {
        if (current.count < min || min === undefined) min = current.count;
      }

    }
    return min;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    let stack = [this.root];
    if (stack[0] === null) return 0;
    let max;

    while (stack.length) {
      let current = stack.pop();

      current.count += 1;

      if (current.right !== null) {
        current.right.count = current.count;

        stack.push(current.right)
      } else {

        if (current.count > max || max === undefined) max = current.count;
      }
      if (current.left !== null) {
        current.left.count = current.count;
        stack.push(current.left)
      } else {
        if (current.count > max || max === undefined) max = current.count;
      }

    }
    return max;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let result = 0;

    function maxSumHelper(node) {
      if (node === null) return 0;
      const leftSum = maxSumHelper(node.left);
      const rightSum = maxSumHelper(node.right);
      result = Math.max(result, node.val + leftSum + rightSum);
      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }

    maxSumHelper(this.root);
    return result;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let stack = [this.root];
    if (stack[0] === null) return null;
    let closest = null;
    while (stack.length) {
      let current = stack.pop();

      if (current.val > lowerBound && (current.val < closest || closest === null)) {
        closest = current.val;
      }
      if (current.left !== null) stack.push(current.left);
      if (current.right !== null) stack.push(current.right);
    }

    return closest;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };

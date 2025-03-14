//QUESTION: Confirm if this is a binary search tree

import { useEffect } from "react";

function BinarySearchTree(root, minimum, maximum, noDuplicate) {
  if (!root) return true;

  //new Set prevents duplicates
  if (minimum === undefined) minimum = null;
  if (maximum === undefined) maximum = null;
  if (noDuplicate === undefined) noDuplicate = new Set();

  //Check if there is a value, return false, and if not add rootvalue 
  if (noDuplicate.has(root.value)) {
    return false;
  } else {
    noDuplicate.add(root.value);
  }

  //if minimum or maximum is not empty and if value of root is lower than 
  // minimum or greater than maximum, then return false
  if (
    (minimum !== null && root.value <= minimum) ||
    (maximum !== null && root.value >= maximum)
  ) {
    return false;
  }

  //This checks if the binary tree conforms to the binary search tree rules of left subtree values
  //  being smaller than root node while the right subtree values are larger than the root node
  return (
    BinarySearchTree(root.left, minimum, root.value, noDuplicate) &&
    BinarySearchTree(root.right, root.value, maximum, noDuplicate)
  );
}

export default function Binary() {
  //This should run once
  useEffect(() => {
    const CorrectBST = {
      value: 10,
      left: {
        value: 8,
        left: { value: 6, left: null, right: null },
        right: { value: 9, left: null, right: null },
      },
      right: {
        value: 12,
        left: { value: 11, left: null, right: null },
        right: { value: 14, left: null, right: null },
      },
    };

    const IncorrectBST = {
      value: 10,
      left: {
        value: 8,
        left: { value: 6, left: null, right: null },
        right: { value: 19, left: null, right: null },
      },
      right: {
        value: 12,
        left: { value: 11, left: null, right: null },
        right: { value: 4, left: null, right: null },
      },
    };

    console.log("Correct BST:", BinarySearchTree(CorrectBST));
    console.log("Incorrect BST:", BinarySearchTree(IncorrectBST));
  }, []);

  return <b>Check the console for the binary search tree results</b>;
}

// NOTES ABOUT BINARY SEARCH TREE:
// The left node is always smaller than or equal to the root while
// The right node is always larger than or equal to the root
// No duplicates
// Each individual nodes, including the root node can have at most 2 children
// but the tree itself can have many nodes


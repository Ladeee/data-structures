//QUESTION: Check if both trees are the same or not

import Binary from './binary';
import Trie from './trie';

// Basic knowledge
function areTreesSame(tree1, tree2) {
  if (!tree1 && !tree2) {
    return true;
  }

  if (!tree1 || !tree2 || tree1.value !== tree2.value || tree1.children.length !== tree2.children.length) {
    console.log("They are the same")
    return false;
  }

  for (let i = 0; i < tree1.children.length; i++) {
    // if any of the 2 trees, tree1 and tree2 is false, return false
    if (!areTreesSame(tree1.children[i], tree2.children[i])) {
      console.log("They are not the same")
      return false;
    }
  }

  return true;
}


const treeA = {
  value: 1,
  children: [
    { value: 2, children: [] },
    { value: 3, children: [{ value: 4, children: [] }] },
  ],
};

const treeB = {
  value: 1,
  children: [
    { value: 2, children: [] },
    { value: 3, children: [{ value: 4, children: [] }] },
  ],
};

const treeC = {
  value: 1,
  children: [
    { value: 2, children: [] },
    { value: 3, children: [{ value: 5, children: [] }] },
  ],
};

export default function Trees() {
  const areABSame = areTreesSame(treeA, treeB);
  const areACSame = areTreesSame(treeA, treeC);

  return (
    <div className="container">
      <h2>Trees</h2>
      <p>Tree A and Tree B are the same: {areABSame ? 'true' : 'false'}</p>
      <p>Tree A and Tree C are the same: {areACSame ? 'true' : 'false'}</p>
      <Binary />
      <Trie />
    </div>
  );
}
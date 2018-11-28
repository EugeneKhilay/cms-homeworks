let arr = [5, 12, 2, 7, 3, 4, 11, 19, 13, 6];
let tree = {};

function pushElement(tree, number) {
  if (tree.root === undefined) {
    tree.root = number;
    // console.log('root', number)
  } else if ( number >= tree.root ) {
    if ( tree.right === undefined ) {
      tree.right = {root: number};
      // console.log('right', number)
    } else {
      // console.log('recursive', number)
      tree.right = pushElement(tree.right, number);
    }
  } else {
    if ( tree.left === undefined ) {
      tree.left = {root: number};
      // console.log('left', number)
    } else {
      // console.log('recursive', number)
      tree.left = pushElement(tree.left, number);
    }
  }
  return tree;
}

function binaryTree (arr) {
  arr.forEach(function (number) {
    pushElement(tree, number)
  })
  console.log(tree);
}

binaryTree(arr);


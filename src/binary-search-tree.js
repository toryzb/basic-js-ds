const { NotImplementedError } = require('../lib/errors');
// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
      this.rootNode = null;
    }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);

    function addNode(node, newNode) {
      if (newNode.data < node.data) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          addNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          addNode(node.right, newNode);
        }
      }
    }

    if (this.rootNode === null) {
      this.rootNode = newNode;
    } else {
      addNode(this.rootNode, newNode);
    }  
  }

  find(data) {
    function findNode(node, data) {
      if (node === null) return null;
      if (data === node.data) return node;
      if (data < node.data) {
        return findNode(node.left, data);
      } else {
        return findNode(node.right, data);
      }
    }
    return findNode(this.rootNode, data);
  }

  has(data) {
    function findNode(node, data) {
      if (node === null) return false;
      if (data === node.data) return true;
      if (data < node.data) {
        return findNode(node.left, data);
      } else {
        return findNode(node.right, data);
      }
    }
    return findNode(this.rootNode, data);
  }

  remove(data) {
    function removeNode(node, data) {
      if (node === null) {
        return null;
      }
      if (data === node.data) {
        if (node.left === null && node.right === null) {
          return null;
        }
        if (node.left === null) {
          return node.right;
        }
        if (node.right === null) {
          return node.left;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      } 
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.rootNode = removeNode(this.rootNode, data);
  }

  min() {
     if (!this.rootNode) {
      return null;
    }
    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }
    let node = this.rootNode;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};
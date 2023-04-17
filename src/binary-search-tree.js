const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor () {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addData(this.rootNode, data);

    function addData(node, data) {
      //если нет узла создаю на его месте новый 
      if (node === null) {
        return new Node(data);
      }  
      //уже есть узел с таким значением
      if (node.data === data) return node;
      //значение меньше идем в левое поддерево, больше -- правое
      if (data < node.data) {
        node.left = addData(node.left, data);
        return node;
      } else {
        node.right = addData(node.right, data);
        return node;
      }
    }
  }

  has(data) {
    return searchData(this.rootNode, data);

    function searchData(node, data) {
      if (node === null) return false;

      if (node.data === data) return true;

      if (data < node.data) return searchData(node.left, data);
      else return searchData(node.right, data);
    }
  }

  find(data) {
    return findData(this.rootNode, data);

    function findData(node, data) {
      if (node === null) return null;

      if (node.data === data) return node;

      if (data < node.data) return findData(node.left, data);
      else return findData(node.right, data);
    }
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, data) {
      if (node === null) return null;

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        // node.data === data 
        // нет потомков возвращаю null вместо узла
        if (node.left === null && node.right === null) return null;
        
        // есть потомок слева или справа 
        if (node.left === null) {
          node = node.right;
          return node;
        }
        if (node.right === null) {
          node = node.left;
          return node;
        }

        let maxFromLeft = node.left;
        while (maxFromLeft.right !== null) {
          maxFromLeft = maxFromLeft.right
        }

        node.data = maxFromLeft.data;
        node.left = removeNode(node.left, maxFromLeft.data);
        return node;
      }
    }
  }

  min() {
    if (this.rootNode === null) return;

    let node = this.rootNode;
    while (node.left !== null) node = node.left;

    return node.data
  }

  max() {
    if (this.rootNode === null) return;

    let node = this.rootNode;
    while (node.right !== null) node = node.right;

    return node.data
  }
}

module.exports = {
  BinarySearchTree
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'BST': return {
      name: 'Binary Search Trees',
      text: '## Binary Search Trees \n'
            + '<blockquote> A binary search tree (bst) is a basic tree data structure that supports a simple searching algorithm. For each node in the binary search tree, with key k, all nodes in its left subtree have keys smaller than k, while all nodes in its right subtree have keys larger than k. Where duplicate keys are allowed in the tree, they usually go into the right subtree by convention. </blockquote> \n\n'
            + '<blockquote> The binary search tree is built up by adding items one at a time. Since the average path length in a tree of n items is log n, the average case complexity of building a bst is O(n log n). Similarly, the average case for a search for m items in a tree of n items is O(m log n), that is O(log n) per item. </blockquote> \n\n'
            + '<blockquote> The biggest problem with the binary search tree is that its behavior degenerates when there is order in the input data. In the worst case, sorted or reverse sorted data items yield a linear tree, or "stick", the complexity of building the tree is O(n^2), and the complexity of a search for a single item is O(n). </blockquote>',
    };
    case 'QS': return { name: 'Quick Sort', text: 'Quick Sort' };
    case 'KMP': return { name: 'KMP', text: 'KMP' };
    case 'HS': return { name: 'HS', text: 'Heap Sort' };
    case 'TS': return { name: 'TS', text: 'Transitive closure' };
    default: return state;
  }
};

export default reducer;

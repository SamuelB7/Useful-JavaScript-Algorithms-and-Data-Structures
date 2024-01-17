function minDepth(root) {
    if (root) {
        let queue = [{ node: root, depth: 1 }]

        while (queue) {
            let { node, depth } = queue.shift()

            if (!node.left && !node.right) {
                return depth;
            }

            depth++;

            if (node.left) {
                queue.push({ node: node.left, depth });
            }

            if (node.right) {
                queue.push({ node: node.right, depth });
            }
        }
    }
    return 0;
};
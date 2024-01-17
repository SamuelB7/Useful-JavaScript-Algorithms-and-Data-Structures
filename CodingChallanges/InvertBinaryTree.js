function solution(root) {
    if (root === null || root == undefined) {
        return;
    }

    const temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left);
    invertTree(root.right);
}

function invertTree(root) {
    solution(root)
    return root;
};
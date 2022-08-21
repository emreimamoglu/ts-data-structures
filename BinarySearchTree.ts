class TreeNode {
    public left: TreeNode | null = null;
    public right: TreeNode | null = null;
    constructor(public data: number) { }
}

class BinarySearchTree {
    private root: TreeNode | null = null;

    
    public insert = (value: number, root: TreeNode | null = this.root) : TreeNode => {
        if (this.root === null) {
            this.root = new TreeNode(value);
        }
        if (root === null) {
            const node = new TreeNode(value);
            return node;
        }

        if (value < root.data) {
            root.left = this.insert(value, root.left);
        }
        if (value > root.data) {
            root.right = this.insert(value, root.right);
        }
        return root;
    }

    public delete = () => {
        // TODO : Implement
    }

    public contains = (value: number, node: TreeNode | null = this.root): boolean => {
        if (this.root === null) {
            return false;
        }

        if (node === null) return false;

        if (node.data === value) return true;

        return this.contains(value, node.left) || this.contains(value, node.right);
    }
    public search = (value: number, node: TreeNode | null = this.root): TreeNode | null => {
        if (this.root === null) {
            return null;
        }

        if (node === null) return null;

        if (node.data === value) return node;

        if (this.search(value, node.left)) {
            return this.search(value, node.left);
        }
        if (this.search(value, node.right)) {
            return this.search(value, node.right);
        }

        return null;
    }
    public inorderTraversal = (root: TreeNode | null = this.root): number[] => {
        if (this.root === null) return [];
        if (root === null) return [];

        const left = this.inorderTraversal(root.left);
        const right = this.inorderTraversal(root.right);

        return [...left, root.data, ...right];
    }
    public preOrderTraversal = (root: TreeNode | null = this.root): number[] => {
        if (this.root === null) return [];
        if (root === null) return [];

        const left = this.inorderTraversal(root.left);
        const right = this.inorderTraversal(root.right);

        return [root.data, ...left, ...right];
    }
    public postOrderTraversal = (root: TreeNode | null = this.root): number[] => {
        if (this.root === null) return [];
        if (root === null) return [];

        const left = this.inorderTraversal(root.left);
        const right = this.inorderTraversal(root.right);

        return [...left, ...right, root.data];
    }
}

/**********************************************************************************************************/

const BST = new BinarySearchTree();
BST.insert(8);
BST.insert(4);
BST.insert(12);
console.log(BST.postOrderTraversal());

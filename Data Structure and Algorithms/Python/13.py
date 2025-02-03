class TreeNode:
    # Enhanced Binary Search Tree Node
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
        self.height = 1 # Used for AVL balancing

class BalancedBST:
    # Self-Balancing binary search tree (AVL Tree) Implementation with traversal methods
    def __init__(self):
        self.root = None

    def _get_height(self, node):
        # Get height of node
        if not node:
            return 0
        return node.height
    
    def _get_balance(self, node):
        # Get balance factor of node
        if not node:
            return 0
        return self._get_height(node.left) - self._get_height(node.right)
    
    def _update_height(self, node):
        # Update height of node
        if not node:
            return
        node.height = max(self._get_height(node.left), self._get_height(node.right)) + 1

    def _right_rotate(self, y):
        # Right rotation for balancing
        x = y.left
        T2 = x.right

        x.right = y
        y.left = T2

        self._update_height(y)
        self._update_height(x)

        return x
    
    def _left_rotate(self, x):
        # Left rotation for balancing
        y = x.right
        T2 = y.left

        y.left = x
        x.right = T2

        self._update_height(x)
        self._update_height(y)

        return y
    
    def insert(self, data):
        # Insert new node and maintain balance
        self.root = self._insert_recursive(self.root, data)

    def _insert_recursive(self, node, data):
        # Recursive insert with balancing
        # Standard BST insert
        if not node:
            return TreeNode(data)
        
        if data["id"] < node.data["id"]:
            node.left = self._insert_recursive(node.left, data)
        else:
            node.right = self._insert_recursive(node.right, data)

        # Update height
        self._update_height(node)

        # Get balance factor
        balance = self._get_balance(node)

        # Balance the tree if needed
        # Left Left Case
        if balance > 1 and data["id"] < node.left.data["id"]:
            return self._right_rotate(node)

        # Right Right Case
        if balance < -1 and data["id"] > node.right.data["id"]:
            return self._left_rotate(node)
        
        # Left Right Case
        if balance > 1 and data["id"] > node.left.data["id"]:
            node.left = self._left_rotate(node.left)
            return self._right_rotate(node)
        
        # Right Left Case 
        if balance < -1 and data["id"] < node.right.data["data"]:
            node.right = self._right_rotate(node.right)
            return self._left_rotate(node)

        return node
    
    # Traversal Methods
    def inorder(self):
        # Inorder Traversal: Left -> Root -> Right
        result = []
        self._inorder_recursive(self.root, result)
        return result
    
    def _inorder_recursive(self, node, result):
        if node:
            self._inorder_recursive(node.left, result)
            result.append(node.data)
            self._inorder_recursive(node.right, result)

    def preorder(self):
        # Preorder Traversal: Root -> Left -> Right
        result = []
        self._preorder_recursive(self.root, result)
        return result
    
    def _preorder_recursive(self, node, result):
        if node:
            result.append(node.data)
            self._preorder_recursive(node.left, result)
            self._preorder_recursive(node.right, result)

    def postorder(self):
        # Postorder Traversal: Left -> Right -> Root
        result = []
        self._postorder_recursive(self.root, result)
        return result
    
    def _postorder_recursive(self, node, result):
        if node:
            self._postorder_recursive(node.left, result)
            self._postorder_recursive(node.right, result)
            result.append(node.data)

    def level_order(self):
        # Level order (breadth-first) traversal
        if not self.root:
            return []
        
        result = []
        queue = [self.root]

        while queue:
            node = queue.pop(0)
            result.append(node.data)

            if node.left:
                queue.append(node.left)

            if node.right:
                queue.append(node.right)

        return result
    
    def search(self, target_id):
        # Search with path tracking
        path = []
        result = self._search_recursive(self.root, target_id, path)
        return {
            "found" : result is not None,
            "data" : result,
            "path" : path
        }
    
    def _search_recursive(self, node, target_id, path):
        if not node:
            return None
        
        path.append(node.data["id"])

        if node.data["id"] == target_id:
            return node.data
        
        if target_id < node.data["id"]:
            return self._search_recursive(node.left, target_id, path)
        return self._search_recursive(node.right, target_id, path)
    
def demonstrate_balanced_bst():
    print("\n=== Balanced BST Demonstrate ===")

    tree = BalancedBST()

    # Sample student data
    students = [
        {"id" : 5, "name" : "Alice", "grade" : 95},
        {"id" : 3, "name" : "Bob", "grade" : 88},
        {"id" : 1, "name" : "David", "grade" : 92},
        {"id" : 2, "name" : "Eve", "grade" : 85},
        {"id" : 4, "name" : "Frank", "grade" : 87},
    ]

    # Insert student
    print("Inserting student...")
    for student in students:
        tree.insert(student)
        print(f"Added : {student['name']} (ID : {student['id']})")

    #Demonstrate different traversal 
    print("\nTraversal Demonstration : ")

    print("\nInorder Traversal (sorted by ID) : ")
    for student in tree.inorder():
        print(f"{student['name']} : {student['id']}")

    print("\nLevel Order ravesal (by tree level) : ")
    for student in tree.level_order():
        print(f"{student['name']} : {student['id']}")

    # Search demonstrattion
    print("\nSearch Demonstration : ")
    search_ids = [4, 8] # One existing, one non-existing

    for search_id in search_ids:
        result = tree.search(search_id)
        print(f"\nSearching for ID : {search_id}")
        if result["found"]:
            print(f"Found : {result['data']['name']}")
        else: 
            print("Student not Found")
        print(f"Search path : {' -> '.join(map(str, result['path']))}")

# Run demonstration
def main():
    demonstrate_balanced_bst()

if __name__ == "__main__":
    main()



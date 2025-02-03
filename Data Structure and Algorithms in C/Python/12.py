class TreeNode:
    # Binary Search Tree Node

    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

class BinarySearchTree:
    # Binary Search Tree implementation with search operations
    def __init__(self):
        self.root = None

    def insert(self, data):
        # Insert new node with data
        if not self.root:
            self.root = TreeNode(data)
        else:
            self._insert_recursive(self.root, data)

    def _insert_recursive(self, node, data):
        # Recursively find correct position and insert
        if data["id"] < node.data["id"]:
            if node.left is None:
                node.left = TreeNode(data)
            else:
                self._insert_recursive(node.left, data)
        else: 
            if node.right is None:
                node.right = TreeNode(data)
            else:
                self._insert_recursive(node.right, data)

    def search(self, target_id):
        # Search for node with target_id
        result = self._search_recursive(self.root, target_id)
        return {
            "found" : result is not None,
            "data" : result,
            "comparisons" : self._count_comparisons(self.root, target_id)
        }
    
    def _search_recursive(self, node, target_id):
        # Recursive search operation
        if node is None or node.data['id'] == target_id:
            return node.data if node else None
        
        if target_id < node.data["id"]:
            return self._search_recursive(node.left, target_id)
        return self._search_recursive(node.right, target_id)
    
    def _count_comparisons(self, node, target_id, count=0):
        # Count number of comparisons in search
        if node is None:
            return count
        
        count += 1
        if node.data["id"] == target_id:
            return count
        
        if target_id < node.data["id"]:
            return self._count_comparisons(node.left, target_id, count)
        return self._count_comparisons(node.right, target_id, count)
    
# Example Student Record System
def demonstrate_student_bst():
    print("\n=== Student Record System Using BST ===")

    # Create BST
    student_tree = BinarySearchTree()

    # Add sample students
    students = [
        {"id" : 101, "name" : "Alice", "grade" : 95}, 
        {"id" : 102, "name" : "Bob", "grade" : 88}, 
        {"id" : 103, "name" : "David", "grade" : 75}
    ]

    print("Adding students to BST : ")
    for student in students:
        student_tree.insert(student)
        print(f"Added : {student['name']} (ID : {student['id']})")

    # Search demonstrations
    test_ids = [102, 106] # One existing, one non-existing

    for student_id in test_ids:
        print(f"\nSearching for Student ID : {student_id}")
        result = student_tree.search(student_id)

        if result["found"]:
            student = result["data"]
            print(f"Found : {student['name']} - Grade : {student['grade']}")
        else:
            print("Student not Found")
    
        print(f"Number of Comparisons : {result['comparisons']}")

demonstrate_student_bst()
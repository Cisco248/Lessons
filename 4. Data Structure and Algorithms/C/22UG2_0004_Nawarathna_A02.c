
	// Header We are Using
	#include <stdio.h>
	#include <stdlib.h>
	#include <time.h>

	// Tree Node Structure
	struct node {
		int data;
		struct node *left;
		struct node *right;
	};

	// Create The New Node For Tree
	struct node *create_NewNode(int n) {
		struct node *node = (struct node *)malloc(sizeof(struct node));
		node -> data = n;
		node -> left = NULL;
		node -> right = NULL;
		return node;
	}

	// Printing the Binary tree
	typedef struct node Node;

	void print_tree(Node *root, int level) {
		if (root == NULL) return;
		for (int i = 0; i < level; i++)
			printf(i == level - 1 ? "  >" : "  ");
		printf("%d\n", root -> data);
		print_tree(root -> left, level + 1);
		print_tree(root -> right, level + 1);
	}

	// In-Order Traversal of the tree
	void inorderTraversal(struct node* root) {
		if (root == NULL)
			return;
		inorderTraversal(root -> left);
		printf("%d ==> ", root -> data);
		inorderTraversal(root -> right);
	}

	// Pre-Order Traversal of the tree
	void preorderTraversal(struct node* root) {
		if (root == NULL)
			return;
		printf("%d ==> ", root -> data);
		preorderTraversal(root -> left);
		preorderTraversal(root -> right);
	}

	// Post-Order Traversal of the tree
	void postorderTraversal(struct node* root) {
		if (root == NULL)
			return;
		postorderTraversal(root -> left);
		postorderTraversal(root -> right);
		printf("%d ==> ", root -> data);
	}

	// Main funtion 
	int main() {
		struct node* root = NULL;
		root = create_NewNode(10);
		root -> left = create_NewNode(20);
		root -> left -> left = create_NewNode(30);
		root -> left -> left -> left = create_NewNode(50);
		root -> left -> left -> right = create_NewNode(60);
		root -> left -> right = create_NewNode(40);
		root -> left -> right -> left = create_NewNode(70);
		root -> left -> right -> right  = create_NewNode(80);
		root -> right = create_NewNode(30);
		root -> right -> left = create_NewNode(50);
		root -> right -> left -> left = create_NewNode(90);
		root -> right -> left -> right = create_NewNode(100);
		root -> right -> right = create_NewNode(60);
		root -> right -> right -> left = create_NewNode(110);
		root -> right -> right -> right = create_NewNode(120);

		// Print Tree Using print_tree function
		printf("Tree Structure\n");
		printf("\n");
		print_tree(root, 0);
		printf("\n");

		// We Need to Measure time for Inorder Traversal
		clock_t start, end; // We are Using 2 variables Start And End for Calculate Time
		double cpu_time_used; // After We Need to Get CPU Calculation Time Using This Variable

		// We Need to Measure time for In-Order Traversal
		start = clock(); // This Code Line Provide Our Time Calculation Start
		printf("\nInorder Traversal: ");
		inorderTraversal(root);
		printf("NULL\n"); // This Code Line We are Using for End of the Travesal Value
		end = clock(); // This Code Line Provide Our Time Calculation End
		cpu_time_used = ((double) (end - start)) / CLOCKS_PER_SEC; // This Code Line Provide Our CPU Executable Time
		printf("Time: %f seconds\n", cpu_time_used); // This Line Describe the Print of CPU Executable Time

		// We Need to Measure time for Pre-Order Traversal
		start = clock(); // This Code Line Provide Our Time Calculation Start
		printf("\nPreorder Traversal: ");
		preorderTraversal(root);
		printf("NULL\n"); // This Code Line We are Using for End of the Travesal Value
		end = clock(); // This Code Line Provide Our Time Calculation End
		cpu_time_used = ((double) (end - start)) / CLOCKS_PER_SEC; // This Code Line Provide Our CPU Executable Time
		printf("Processing Time: %f seconds\n", cpu_time_used); // This Line Describe the Print of CPU Executable Time

		// We Need to Measure time for Post-Order Traversal
		start = clock(); // This Code Line Provide Our Time Calculation Start
		printf("\nPostorder Traversal: ");
		postorderTraversal(root);
		printf("NULL\n"); // This Code Line We are Using for End of the Travesal Value
		end = clock(); // This Code Line Provide Our Time Calculation End
		cpu_time_used = ((double) (end - start)) / CLOCKS_PER_SEC; // This Code Line Provide Our CPU Executable Time
		printf("Processing Time: %f seconds\n", cpu_time_used); // This Line Describe the Print of CPU Executable Time

		return 0; // Finally, Return Of These Function
	}

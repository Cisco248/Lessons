#include <stdio.h>
#include <stdlib.h>

// Tree Node Structure
struct node {
	int data;
	struct node *left;
	struct node *right;
};

// Create The New Node For Tree
struct node *create_NewNode(char n) {
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
	for (int i = 0; i < level; i++ )
		printf(i == level - 1 ? "|-" : " ");

	printf("%d\n", root -> data);
	print_tree(root -> left, level + 1);
	print_tree(root -> right, level + 1);
};

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

	// root -> left = create_NewNode(50);
	print_tree(root, 0);

}

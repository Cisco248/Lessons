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
        printf(i == level - 1 ? "|-" : "  ");
    printf("%d\n", root -> data);
    print_tree(root -> left, level + 1);
    print_tree(root -> right, level + 1);
}

// Inorder Traversal of the tree
void inorderTraversal(struct node* root) {
    if (root == NULL)
        return;
    inorderTraversal(root -> left);
    printf("%d -> ", root -> data);
    inorderTraversal(root -> right);
}

// Preorder Traversal of the tree
void preorderTraversal(struct node* root) {
    if (root == NULL)
        return;
    printf("%d -> ", root -> data);
    preorderTraversal(root -> left);
    preorderTraversal(root -> right);
}

// Postorder Traversal of the tree
void postorderTraversal(struct node* root) {
    if (root == NULL)
        return;
    postorderTraversal(root -> left);
    postorderTraversal(root -> right);
    printf("%d -> ", root -> data);
}

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

    printf("Tree Structure:\n");
    print_tree(root, 0);

    // Measure time for Inorder Traversal
    clock_t start, end;
    double cpu_time_used;

    start = clock();
    printf("\nInorder Traversal:\n");
    inorderTraversal(root);
    printf("NULL\n");
    end = clock();
    cpu_time_used = ((double) (end - start)) / CLOCKS_PER_SEC;
    printf("Inorder Traversal Time: %f seconds\n", cpu_time_used);

    // Measure time for Preorder Traversal
    start = clock();
    printf("\nPreorder Traversal:\n");
    preorderTraversal(root);
    printf("NULL\n");
    end = clock();
    cpu_time_used = ((double) (end - start)) / CLOCKS_PER_SEC;
    printf("Preorder Traversal Time: %f seconds\n", cpu_time_used);

    // Measure time for Postorder Traversal
    start = clock();
    printf("\nPostorder Traversal:\n");
    postorderTraversal(root);
    printf("NULL\n");
    end = clock();
    cpu_time_used = ((double) (end - start)) / CLOCKS_PER_SEC;
    printf("Postorder Traversal Time: %f seconds\n", cpu_time_used);

    return 0;
}

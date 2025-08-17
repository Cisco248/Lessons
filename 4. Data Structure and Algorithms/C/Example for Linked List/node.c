#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

void printLinkedList(struct Node* head) {
    struct Node* current = head;
    while (current != NULL) {
        printf("%d -> ", current->data);
        current = current->next;
    }
    printf("NULL\n");
}

int main() {
    // Create four nodes
    struct Node* node1 = (struct Node*)malloc(sizeof(struct Node));
    struct Node* node2 = (struct Node*)malloc(sizeof(struct Node));
    struct Node* node3 = (struct Node*)malloc(sizeof(struct Node));
    struct Node* node4 = (struct Node*)malloc(sizeof(struct Node));

    // Add data to each node
    node1->data = 100;
    node2->data = 150;
    node3->data = 200;
    node4->data = 250;

    // Connect the nodes
    node1->next = node2;
    node2->next = node3;
    node3->next = node4;
    node4->next = NULL; // The last node points to NULL

    // Print the linked list starting from the first node
    printLinkedList(node1);

    // Free the allocated memory
    free(node1);
    free(node2);
    free(node3);
    free(node4);

    return 0;
}

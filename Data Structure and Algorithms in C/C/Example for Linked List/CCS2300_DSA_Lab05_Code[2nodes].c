// Your code correctly creates a linked list with two nodes and prints the list. Here's a step-by-step explanation and a few suggestions for clarity and safety:

// Explanation:

// The struct node defines the structure of each node in the linked list.
// The printList function iterates through the linked list starting from the head node and prints each node's data.
// In the main function, two nodes (head and last) are created, and their data and next pointers are set.
// The head node points to the last node, and the last node points to NULL, indicating the end of the list.
// Finally, printList is called with head to print the entire list.


// Suggestions:

// Check for malloc failure: It's good practice to check if malloc returns NULL, indicating that memory allocation failed.
// Free allocated memory: To avoid memory leaks, you should free the allocated memory at the end of the program.

#include <stdio.h>
#include <stdlib.h>

struct node {
    int data;
    struct node *next;
};

void printList(struct node *head) {
    struct node *temp = head;
    while (temp != NULL) {
        printf("%d -> ", temp->data);
        temp = temp->next;
    }
    printf("NULL\n");
}

int main(){
    
    struct node *head, *last;
    head   = malloc(sizeof(struct node)); 
    last   = malloc(sizeof(struct node));

    head->data   = 70;
    last->data   = 80;

    head->next   = last;
    last->next   = NULL;
    
    printList(head);
}




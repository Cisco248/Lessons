// linked list: Delete a node at nth position
// Simple Linked List Program...

#include <stdio.h>
#include <stdlib.h>

struct Node* head; // Global Variable

struct Node {
    int data;
    struct Node* next;
};


void Insert(int data){
    struct Node* temp1 = (struct Node*)malloc(sizeof(struct Node));
    temp1 -> data = data;
    temp1 -> next = head;
    head = temp1;
}; // Insert an Integer at the end of list..

void Print(){
    struct Node* temp1 = head;
    printf("List is: ");

    while(temp1 != NULL) {
        printf("%d ", temp1 -> data);
        temp1 = temp1 -> next;
    }

    printf("\n");
} // Print all Elements in the list...

// Delete node at position n
void Delete(){
    int i, n;

    // Create Node 1
    struct Node* temp1 = head;
    if(n == 1){
        head = temp1 -> next; // head now points to second node..
        free(temp1);
        return 0;
    }

    for(i = 0; i < n-2; i++){
        temp1 = temp1 -> next; // Temp Points to (n-1)th Node...
    }

    // Create Node 2 Using End of Node 1
    struct Node* temp2 = temp1 -> next;
    temp1 -> next = temp2 -> next;
    free(temp2); // Delete temp2

}


int main(){ // Main Function

    int n;

    head = NULL; // Empty List
    Insert(2);
    Insert(4);
    Insert(6);
    Insert(5); // List: 2,4,6,5
    Print();

    printf("Enter a Position: \n");
    scanf("%d", &n);

    Delete(n);
    Print();

    return;
}

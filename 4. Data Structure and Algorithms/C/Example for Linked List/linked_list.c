#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

struct Node* head;

// insert the linked list items.....
void Insert(int x){
    struct Node* temp = (struct Node*)malloc(sizeof(struct Node));
    temp -> data = x;
    temp -> next = head;
    head = temp;
};

// Print Function  for Linked List....
void Print(){
    struct Node* temp = head;
    printf("List is: ");

    while(temp != NULL) {
        printf("%d", temp -> data);
        temp = temp -> next;
    }

    printf("\n");
};

int main() {
    int n, i, x;
    head = NULL;
    printf("How many numbers? \n");
    scanf("%d", &n);

    for (i = 0; i < n; i++) {
        printf("Enter the Number: \n");
        scanf("%d", &x);
        Insert(x); // Call  the insert Item Function...
        Print(); // Call the Print Function....
    }
 }

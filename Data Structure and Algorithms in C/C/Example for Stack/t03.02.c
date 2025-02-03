#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define MAX_ARR_SIZE 10

int count = 0;
int randomValue;


typedef struct {
    int elements[MAX_ARR_SIZE];
    int top;
} Stack;


void createEmptyStack(Stack *stack) {
    stack -> top = -1;
}

int isFull(Stack *stack) {
    if (stack -> top == MAX_ARR_SIZE - 1) {
        return 1;
    } else {
        return 0;
    }
}
 
void push(Stack *stack, int value) {
    if(isFull(stack)) {
        printf("STACK IS FULL! fAILED PUSH %d\n", value);
    } else {
        stack -> top++;
        stack -> elements[ stack -> top ] = value;
    }
    count++;
}

int isEmpty(Stack *stack) {
    if (stack -> top == -1) {
        return 1;
    } else {
        return 0;
    }
}

void pop(Stack *stack) {
    if (isEmpty(stack)) {
        printf("STACK EMPTY!");
    } else {
        stack -> top--;
    }
    count--;
}

// Function to print the stack
void printStack(Stack *stack) {
    printf("\n");
    if (isEmpty(stack)) {
        printf("STACK IS EMPTY!\n");
    } else {
        for (int i = 0; i <= stack->top; i++) {
            printf("STACK NO: %d\n", stack -> elements[i]);
        }
        printf("\n");
    }
}
  
int main() {
 
    Stack stack_A, stack_B; // Create the 2 Of Satck Variables.

    createEmptyStack(&stack_A); // Create StackA
    createEmptyStack(&stack_B); // Create StackB

    int randomValue; // Automatically select random Number store in this variable.
    srand(time(NULL)); // Seed the random number generator with the current time

    for ( int i = 0; i <= 10; i++) {

        randomValue = rand() % 21;

        if (randomValue % 2 == 0) {
            printf("Value Is EVEN: %d\n", randomValue);
            push(&stack_A, randomValue);
        } else {
            printf("Value is ODD: %d\n", randomValue);
            push(&stack_B, randomValue);
        }
        
    }

    // Print the contents of Stack_A and Stack_B
    printf("\n***********************************************");
    printf("\n\t\tSTACK A: ");
    printf("\n***********************************************");
    printStack(&stack_A);
    printf("\n*************************************************");
    printf("\n\t\tSTACK B: ");
    printf("\n*************************************************");
    printStack(&stack_B);

    return 0;

}
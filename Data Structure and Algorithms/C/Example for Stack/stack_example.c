#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

#define MAX 10

int count = 0;

struct stack {
    int *elements[MAX];
    int top;
};

typedef struct stack st;

void createEmptyStack(st *s) {
    s->top = -1;
}

int isFull(st *s) {
    return s->top == MAX - 1;
}

int isEmpty(st *s) {
    return s->top == -1;
}

void push(st *s, int newitem) {
    if (isFull(s)) {
        printf("Stack is Full!");
        return;
    } else {
        s -> top++;
        s -> elements[s -> top] = newitem;
    }
    count++;
}

void pop(st *s, int newitem) {
    if (isEmpty(s)) {
        printf("STACK is EMPTY!");
    } else {
        s -> top--;
    }
    count--;
}

void printStack(st *s) {
    printf("Stack: \n");
    for (int i = 0; i < count; i++) {
        printf("%d\n", s -> elements[i]);
    }
    printf("\n");
}

void freeStack(st *s) {
        if (s != NULL) {
            free(s); 
        }
}

int main() {
    st *s = (st *)malloc(sizeof(st));
    int n, items;

    createEmptyStack(s);

    printf("Your Stack Size: ");
    scanf("%d", &n);

    for (int i = 0; i < n; i++) {
        printf("Enter Element %d: ", i + 1);
        scanf("%d", &items);
        push(s, items);
    }
    
    printStack(s);

    printf("Delete Element: ");
    scanf("%d", &items);
    pop(s, items);

    printf("\n");

    printf("Add Element: ");
    scanf("%d", &items);
    push(s, items);

    printStack(s);

    freeStack(s);

    return 0;
}
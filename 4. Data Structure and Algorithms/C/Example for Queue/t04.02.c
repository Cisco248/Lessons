/*
Part I – Application question: Simple Queues
********************************************

1.  Use your knowledge and code from the lecture to implement a simple queue for the
    following scenario. You are an intern at a software development company and you have been assignedaproject to develop a 
    simple ticket booking system for a small event that can accommodateup to 6 attendees. 
    The booking system should allow the users to book tickets and cancel tickets andalsodisplay the list of attendees

[*] Now, modify your code to comprise names of people in the queue instead of their ticket IDs
*/

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define CAPACITY 6
#define NAME_LENGTH 30

typedef struct {
    int front;
    int rear;
    int size;
    char names[CAPACITY][NAME_LENGTH];
} TicketQueue;

void initializeQueue(TicketQueue* queue) {
    queue->front = 0;
    queue->rear = -1;
    queue->size = 0;
}

int isFull(TicketQueue* queue) {
    return queue->size == CAPACITY;
}

int isEmpty(TicketQueue* queue) {
    return queue->size == 0;
}

void enqueue(TicketQueue* queue, char* name) {
    if (isFull(queue)) {
        printf("\nQueue is full. Cannot add more attendees.\n");
        return;
    }
    queue->rear = (queue->rear + 1) % CAPACITY;
    strcpy(queue->names[queue->rear], name);
    queue->size++;
    printf("\n%s has been Booking.\n", name);
}

void dequeue(TicketQueue* queue) {
    if (isEmpty(queue)) {
        printf("\nQueue is empty. No attendee to remove.\n");
        return;
    }
    char removed_name[NAME_LENGTH];
    strcpy(removed_name, queue->names[queue->front]);
    queue->front = (queue->front + 1) % CAPACITY;
    queue->size--;
    printf("\n%s has been Canceling.\n", removed_name);
}

void printQueue(TicketQueue* queue) {
    if (isEmpty(queue)) {
        printf("\nThe queue is empty.\n");
        return;
    }
    printf("\nList of attendees: ");
    for (int i = 0; i < queue->size; i++) {
        printf("%s ", queue->names[(queue->front + i) % CAPACITY]);
    }
    printf("\n");
}

int main() {
    TicketQueue queue;
    initializeQueue(&queue);

    enqueue(&queue, "Alice");
    enqueue(&queue, "Bob");
    enqueue(&queue, "Charlie");
    printQueue(&queue);
    dequeue(&queue);
    printQueue(&queue);

    return 0;
}

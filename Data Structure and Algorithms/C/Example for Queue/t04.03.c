#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define CAPACITY 6
#define NAME_LENGTH 30

typedef struct {
    int front;    // Index of the front element
    int rear;     // Index of the rear element
    int size;     // Current size of the queue
    char names[CAPACITY][NAME_LENGTH];  // Array to store attendee names
} CircularQueue;

/* This function initializes the queue by setting
   the front and rear pointers to the appropriate
   positions and setting the size to zero. */
void initializeQueue(CircularQueue* queue) {
    queue->front = 0;
    queue->rear = -1;
    queue->size = 0;
}

/* This function checks if the queue is full
   by comparing the size of the queue to the capacity. */
int isFull(CircularQueue* queue) {
    return queue->size == CAPACITY;
}

/* This function checks if the queue is empty
   by checking if the size of the queue is zero. */
int isEmpty(CircularQueue* queue) {
    return queue->size == 0;
}

/* This function adds a name to the rear of the queue
   if the queue is not full. */
void enqueue(CircularQueue* queue, char* name) {
    if (isFull(queue)) {
        printf("\nQueue is full. Cannot add more attendees.\n");
        return;
    }
    queue->rear = (queue->rear + 1) % CAPACITY;  // Circular increment
    strcpy(queue->names[queue->rear], name);
    queue->size++;
    printf("\n%s has been Booking.\n", name);
}

/* This function removes a name from the front of the queue
   if the queue is not empty. */
void dequeue(CircularQueue* queue) {
    if (isEmpty(queue)) {
        printf("\nQueue is empty. No attendee to remove.\n");
        return;
    }
    char removed_name[NAME_LENGTH];
    strcpy(removed_name, queue->names[queue->front]);
    queue->front = (queue->front + 1) % CAPACITY;  // Circular increment
    queue->size--;
    printf("\n%s has been Canceling.\n", removed_name);
}

/* This function prints the current list of attendees in the queue. */
void printQueue(CircularQueue* queue) {
    if (isEmpty(queue)) {
        printf("\nThe queue is empty.\n");
        return;
    }
    printf("\nCurrent List: ");
    for (int i = 0; i < queue->size; i++) {
        printf("%s ", queue->names[(queue->front + i) % CAPACITY]);
    }
    printf("\n");
}

int main() {
    CircularQueue queue;
    initializeQueue(&queue);

    enqueue(&queue, "Alice");
    enqueue(&queue, "Bob");
    enqueue(&queue, "Charlie");
    printQueue(&queue);
    dequeue(&queue);
    printQueue(&queue);

    return 0;
}

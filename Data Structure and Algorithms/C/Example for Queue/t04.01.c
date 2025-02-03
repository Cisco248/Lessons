/*
Part I – Application question: Simple Queues
********************************************

1.  Use your knowledge and code from the lecture to implement a simple queue for the
    following scenario. You are an intern at a software development company and you have been assignedaproject to develop a 
    simple ticket booking system for a small event that can accommodateup to 6 attendees. 
    The booking system should allow the users to book tickets and cancel tickets andalsodisplay the list of attendees

[*] First assume each attendee has a given a ticket ID (an integer). 
[*] Implement the codetoenqueue / dequeue / display attendees ticket IDs.
*/

#include <stdio.h>
#include <stdlib.h>

#define CAPACITY 6

typedef struct{
    int front;
    int rear;
    int size;
    int tickets[CAPACITY];
} TicketQueue;

void initializeQueue(TicketQueue* queue) {
    queue -> front = 0;
    queue -> rear = -1;
    queue -> size = 0;
}

int isFull(TicketQueue* queue) {
    return queue -> size == CAPACITY;
}

int isEmpty(TicketQueue* queue) {
    return queue -> size == 0;
}

void enqueue(TicketQueue* queue, int ticket_id) {
    if (isFull(queue)) {
        printf("Queue is FULL. Cannot Add More Tickets.\n");
        return;
    }

    queue -> rear = (queue -> rear + 1) % CAPACITY;
    queue -> tickets[queue -> rear] = ticket_id;
    queue -> size++;
    printf("\nTicket ID %d has been Booking.\n", ticket_id);
}

void dequeue(TicketQueue* queue) {
    if (isEmpty(queue)) {
        printf("Queue is EMPTY. No Ticket to Remove.\n");
        return;
    }
    int removed_ticket = queue -> tickets[queue -> front];
    queue -> front = (queue -> front + 1) % CAPACITY;
    queue -> size--;
    printf("\nTicket ID %d has been Canceling.\n", removed_ticket);
}

void printQueue(TicketQueue* queue) {
    if (isEmpty(queue)) {
        printf("The queue is empty.\n");
        return;
    }
    printf("\nCurrent Booking List: ");
    for (int i = 0; i < queue->size; i++) {
        printf("%d ", queue->tickets[(queue->front + i) % CAPACITY]);
    }
    printf("\n");
}

int main() {
    TicketQueue queue;
    initializeQueue(&queue);

    enqueue(&queue, 101);
    enqueue(&queue, 102);
    enqueue(&queue, 103);
    printQueue(&queue);
    dequeue(&queue);
    printQueue(&queue);

    return 0;
}
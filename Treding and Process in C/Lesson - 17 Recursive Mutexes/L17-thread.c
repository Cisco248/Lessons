/*
Recursive Mutex Lock
--------------------

Firstly, We are setup the our Program Mutex lock. 
After we can see the mutex lock and like this.

1 - (This Variable is in the Global Variable)
    # pthread_mutex_t mutexFuel;

2 - (This initializer in the main function)
    # pthread_mutex_init(&mutexFuel, NULL);

3 - (Between many Code !!! After the All Codes)
    # pthread_mutex_destroy(&mutexFuel);

This is Recursive Mutex Lock Design firstly We Need to Create the the Variables

1 - (This Variable in the Main Function)
    pthread_mutexattr_t recursiveMutexAttributes;
    
2 - (This initializer in the main function)
    pthread_mutexattr_init (&recursiveMutexAttributes);

3 - (Between many Code !!! After the All Codes)
    pthread_mutexattr_settype(&recursiveMutexAttributes, PTHREAD_MUTEX_RECURSIVE);

This is the Routine Funtion Using Double Lock.. Because We need to Hold and Lock the all Threads.

    void* routine(void* args) {
        pthread_mutex_lock(&mutexFuel);
        pthread_mutex_lock(&mutexFuel);
        fuel += 50;
        printf("Incremented Fuel to %d\n", fuel);
        pthread_mutex_unlock(&mutexFuel);
    }

After This Doing all these Code: 
*/

#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <unistd.h>
#include <string.h>

#define THREAD_NUM 8

pthread_mutex_t mutexFuel;
int fuel = 50;

void* routine(void* args) {
    pthread_mutex_lock(&mutexFuel);
    pthread_mutex_lock(&mutexFuel);
    fuel += 50;
    printf("Incremented Fuel to %d\n", fuel);
    pthread_mutex_unlock(&mutexFuel);
}

int main (int argc, char* argv[]) {
    pthread_t th[THREAD_NUM];
    pthread_mutexattr_t recursiveMutexAttributes;
    pthread_mutexattr_init (&recursiveMutexAttributes);
    pthread_mutexattr_settype(&recursiveMutexAttributes, PTHREAD_MUTEX_RECURSIVE);
    pthread_mutex_init(&mutexFuel, &recursiveMutexAttributes);

    int i;
    for (i = 0; i < THREAD_NUM; i++) {
        if (pthread_create(&th[i], NULL, &routine, NULL) != 0) {
            perror("Failed to Create Thread");
        }
    }
    for (i = 0; i < THREAD_NUM; i++) {
        if (pthread_join(th[i], NULL) != 0) {
            perror("Failed to Join Thread");
        }
    }
    printf("Fuel: %d\n", fuel);
    pthread_mutexattr_destroy(&recursiveMutexAttributes);
    pthread_mutex_destroy(&mutexFuel);
    return 0;
}
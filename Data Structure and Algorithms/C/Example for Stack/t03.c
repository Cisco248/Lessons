// Simple Stack Example

#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    int i;
    int randomValue;

    srand(time(NULL));  // Seed the random number generator with the current time
    
    for( i = 0; i <= 10; i++) {

        randomValue = rand() % 21;

        if( randomValue % 2 == 0 ) {
            printf("Even: %d\n", randomValue);
        }
        else {
            printf("Odd: %d\n", randomValue);
        }
        //printf("Random Number: %d\n\n", i);
    }
    return 0;
}
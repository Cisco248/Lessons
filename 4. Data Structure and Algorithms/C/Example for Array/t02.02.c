// Simple Loop For the Array

#include <stdio.h>

int main() {
    int num_arr[] = { 10, 20, 30, 40, 50 };
    int size = sizeof(num_arr) / sizeof(num_arr[0]);

    printf("----- Array elements -----\n\n");
    for(int i = 0; i < size; i++) {
        printf("%d\n", num_arr[i]);
    }
    printf("\n");

    return 0;
}

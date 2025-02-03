#include <stdio.h>
#include <stdlib.h>

int binary_search(int arr[], int size, int target) {
    int left = 0;
    int right = size - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target) {
            return mid;
        }

        if (arr[mid] < target) {
            left = mid +1;
        }

        else {
            right = mid - 1;
        }
    }
}

int main() {
    int size;
    int target;

    printf("Enter the Array Size: ");
    scanf("%d", &size);
    printf("\n");

    // Allocate memory for the array
    int *arr = (int*)malloc(size * sizeof(int));

    // Prompt user for array elements and read the input
    for (int i = 0; i < size; i++) {
        printf("Enter the elements of the array: ");
        scanf("%d", &arr[i]);
        printf("\n");
    }

    // Prompt user for the target value and read the input
    printf("Enter the target value: ");
    scanf("%d", &target);
    printf("\n");

    int result = binary_search(arr, size, target);

    if(result != -1) {
        printf("Element is present at index %d\n", result);
    } else {
        printf("Element is not presenting the array\n");
    }

    free(arr);
    
    return 0;
}
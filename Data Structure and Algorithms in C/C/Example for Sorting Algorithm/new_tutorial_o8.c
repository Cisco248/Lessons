#include <stdio.h>
#include <stdlib.h>

int binary_search(int arr[], int size, int target) {
    int left = 0;                // Initialize left index to 0
    int right = size - 1;        // Initialize right index to size - 1

    while (left <= right) {      // Loop until left index is less than or equal to right index
        int mid = left + (right - left) / 2;  // Calculate the middle index

        if (arr[mid] == target) {  // If the target is found at mid index
            return mid;            // Return the mid index
        }

        if (arr[mid] < target) {   // If target is greater than mid element
            left = mid + 1;        // Update left index to mid + 1
        } else {                   // If target is less than mid element
            right = mid - 1;       // Update right index to mid - 1
        }
    }

    return -1;  // Return -1 if the target is not found
}

int main() {
    int size;        // Variable to store the size of the array
    int target;      // Variable to store the target value

    printf("Enter the size of the array: ");
    scanf("%d", &size);

    int *arr = (int*)malloc(size * sizeof(int));    // Allocate memory for the array

    for (int i = 0; i < size; i++) {    // Prompt user for array elements and read the input
        printf("Enter the elements of the array: ");
        scanf("%d", &arr[i]);
    }

    printf("Your Array Element: ");     // Print the array elements
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]); 
    }

    printf("\n");
    
    printf("Enter the target value: "); // Prompt user for the target value and read the input
    scanf("%d", &target);

    int result = binary_search(arr, size, target);    // Perform binary search and store the result

    if (result != -1) {     // Print the result based on whether the target was found or nots
        printf("Element is present at index %d\n", result);
    } else {
        printf("Element is not present in the array\n");
    }

    free(arr);     // Free the allocated memory

    return 0;  // Return 0 to indicate successful execution
}

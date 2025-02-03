#include <stdio.h>

void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {		// Last i elements are already in place
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                int temp = arr[j];	// Swap arr[j] and arr[j+1]
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

int main() {
    int arr[] = {12, 6, 7, 8, 10, 2, 9};
    int n = sizeof(arr)/sizeof(arr[0]);
    printf("Unsorted array: ");
    printArray(arr, n);
	printf("\n");
    
    bubbleSort(arr, n);
    
    printf("Sorted array: ");
    printArray(arr, n);
	printf("\n");
    return 0;
}

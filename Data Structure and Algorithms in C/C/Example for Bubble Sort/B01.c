#include <stdio.h>

void bubble_sort(int a[], int length) {
	for (int i = 0; i < length ; i++) {
		for (int j = 0; j < (length - 1); j++) {
			if (a[j] > a[j + 1]) {
				int temp = a[j];
				a[j] = a[j + 1];
				a[j + 1] = temp;
			}
		}
	}
}

int main(void) {
	int a[] = { 1, 3, 7, 9, 10, 2, 4, 5, 8, 6 };
	int b[] = { 1, 3, 7, 9, 10, 2, 4, 5, 8, 6 };

	int length = 10;

	bubble_sort(a, length);
	bubble_sort(b, length);

	for (int i = 0; i < length ; i++) {
		printf("a[%d] = %d\n", i, a[i]);
	}
	
	printf("\n"); 

	for (int i = 0; i < length; i++) {
		printf("b[%d] = %d\n", i, b[i]); 
	}

	return 0;
}
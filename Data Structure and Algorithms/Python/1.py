class ArrayOperation: 
    def __init__(self, size):
        self.size = size
        self.array = [None] * size
        self.length = 0

    def access(self, index):
        if 0 <= index < self.length:
            return self.array[index]
        raise IndexError("Index out of bound")

    def insert(self, index, element):
        if self.length >= self.size:
            raise OverflowError("Array is full")

        for i in range(self.length, index, -1):
            self.array[i] = self.array[i - 1]

        self.array[index] = element
        self.length += 1

    def delete(self, index):
        if index >= self.length:
            raise IndexError("Index out of bound")

        for i in range(index, self.length - 1):
            self.array[i] = self.array[i + 1]
        
        self.array[self.length - 1] = None
        self.length -= 1

    def display(self):
        return [self.array[i] for i in range(self.length)]

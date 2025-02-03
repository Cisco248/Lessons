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


def shopping_cart_example():
    print("\n===Shopping Cart Example ===")
    cart = ArrayOperation(10)

    items = [
        {"id" : 1, "name" : "Laptop", "price" : 999.99},
        {"id" : 2, "name" : "Mouse", "price" : 29.99},
        {"id" : 3, "name" : "Keyboard", "price" : 19.99}
    ]

    print("Adding items to cart : ")
    for i, item in enumerate(items):
        cart.insert(i, item)
        print(f"Added {item['name']} - ${item['price']}")

    print("\nCurrent cart Contents: ")
    print(cart.display())

    print("\nRemoving second item (mouse) ...")
    cart.delete(1)
    print("Update cart Content : ")
    print(cart.display())

    first_item = cart.access(0)
    print(f"\nFirst item in cart : {first_item['name']} - ${first_item['price']}")

shopping_cart_example()

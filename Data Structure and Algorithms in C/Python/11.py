class Node:
    # Single Node Linked List

    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    # Implementation with Searching Linked List

    # Create the Head Node
    def __init__(self):
        self.head = None

    def append(self, data):
        # Add a new node at the end 0(n)
        if not self.head:
            self.head = Node(data)
            return
        
        current = self.head
        while current.next:
            current = current.next
        current.next = Node(data)

    def insert_front(self, data):
        # Add a new node at the beginning 0(1)
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def delete(self, data):
        # Delete first occurrunce of data 0(n)
        if not self.head:
            return False
        
        if self.head.data == data:
            self.head = self.head.next
            return True
        
        current = self.head
        while current.next:
            if current.next.data == data:
                current.next = current.next.next
                return True
            current = current.next
        return False
    
    def linear_search(self, target):
        # Search for an element and return it's position
        current = self.head
        position = 0

        while current:
            if current.data == target:
                return {
                    "position" : position,
                    "found" : True,
                    "data" : current.data
                }
            current = current.next
            position += 1

        return {
            "position" : -1,
            "found" : False,
            "data" : None
        }
    
    def display(self):
        # Return list of all elements
        elements = []
        current = self.head
        while current:
            elements.append(current.data)
            current = current.next
        return elements

class Book:
    # Book record for library management

    def __init__(self, isbn, title, author):
        self.isbn = isbn
        self.title = title
        self.author = author

    def __eq__(self, other):
        # Enables comparison with ISBN string
        if isinstance(other, str):
            return self.isbn == other
        return False
    
    def __str__(self):
        return f"{self.title} by {self.author} (ISBN : {self.isbn})"
    
def demonstrate_library_linked_list():
    print("\n=== Library Book Management Example ===")

    # Create library catalog
    catalog = LinkedList()

    books = [
        Book("978-0001", "Python Basics", "John Smith"),
        Book("978-0002", "Data Structure", "Jane Smith"),
        Book("978-0003", "Algorithms", "Bob Wilson")
    ]

    print("Adding book to catalog : ")
    for book in books:
        catalog.append(book)
        print(f"Added : {book}")

    # Search for a book
    print("\nSearching for ISBN : 978-0002")
    result = catalog.linear_search("978-0002")
    if result["found"]:
        book = result["data"]
        print(f"Found at position {result['position']} : {book}")

    else:
        print("Book not Found")

    # Delete a book
    print("\nDeleting book with ISBN : 978-0001")
    catalog.delete("978-0001")
    print("\nUpdated catalog : ")
    for book in catalog.display():
        print(book)

demonstrate_library_linked_list()
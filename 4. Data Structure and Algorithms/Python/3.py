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


def student_roster_example():
    print("\n=== Student Roster Example ===")
    roster = ArrayOperation(20)

    students = [
        {"id" : "S001", "name" : "John", "grade" : "A"},
        {"id" : "S002", "name" : "Emma", "grade" : "B"},
        {"id" : "S003", "name" : "Michael", "grade" : "A-"}
        ]
    print("Adding Student to Roster : ")
    for i, student in enumerate(students):
        print(f"Added {student['name']}, ID : {student['id']}, grade : {student['grade']}")

    print("\nCurrent Roster : ")
    for student in students:
        print(f"{student['name']}, {student['grade']}")

    new_student = {"id" : "S0004", "name" : "Sarah", "grade" : "B+"}
    print(f"Adding new student {student['name']} at position 1")
    roster.insert(1, new_student)

    print("\nUpdated Roster : ")
    for student in students:
        print(f" {student['name']}, {student['grade']}")

student_roster_example()
    

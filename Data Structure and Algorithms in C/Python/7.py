class ArrayOperations: 
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


class StudentManagementSystem:
    def __init__(self, capacity):
        self.roster = ArrayOperations(capacity)
        self.id_index = {} # For quick lookup by ID

    def add_student(self, student):
        # Add Array
        index = self.roster.length
        self.roster.insert(index, student)

        # Add to Index
        self.id_index[student['id']] = index

        print(f"Added Student : {student['name']}")

    def find_student_by_id(self, student_id):
        # Use index for 0(1) lookup
        if student_id in self.id_index:
            index = self.id_index[student_id]
            return self.roster.access(index)
        return None
    
    def find_student_by_grade(self, grade):
        # Linear search for all student with matching grade
        matches = []
        for i in range(self.roster.length):
            student = self.roster.access(i)
            if student['grade'] == grade:
                matches.append(student)
        return matches
    
def run_student_management_example():
        print("\n=== Student Management System Example ===")

        #Initialize system
        sms = StudentManagementSystem(100)

        students = [
            {"id" : "S001", "name" : "John Doe", "grade" : "A", "major" : "CS"},
            {"id" : "S002", "name" : "Will Smith", "grade" : "B", "major" : "Math"},
            {"id" : "S003", "name" : "Bob Steve", "grade" : "A", "major" : "Physics"},
            {"id" : "S004", "name" : "Johnathan", "grade" : "A-", "major" : "CS"},
            {"id" : "S005", "name" : "Alice Brown","grade" : "B+", "major" : "Art"},
        ]

        for student in students:
            sms.add_student(student)

        print("\nSearching for Student S003 : ")
        student = sms.find_student_by_id("S003")
        if student:
            print(f"Found : {student['name']} - {student['major']}")

        # Find all student with grade A
        print("\nSearching for Student with Grade A : ")
        a_student = sms.find_student_by_grade("A")
        for student in a_student:
            print(f"{student['name']} - {student['major']}")

run_student_management_example()
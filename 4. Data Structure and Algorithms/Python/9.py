class EmployeeDirectory:
    # Employee Directory with multiple search indices

    def __init__(self):
        self.by_id = {} # Primary Index
        self.by_department = {} # Deparment Index
        self.by_salary_range = {} # Salary Range Index

    def add_employee(self, emp_id, name, department, salary):
        # Add Employee with multiple indices
        # Create employee record
        employee = {
            "id" : emp_id,
            "name" : name,
            "department" : department,
            "salary" : salary
        }

        # Add to primary index
        self.by_id[emp_id] = employee

        # Add to department index
        if department not in self.by_department:
            self.by_department[department] = []
        self.by_department[department].append(employee)

        # Add to salary range index
        salary_range = (salary // 10000) * 10000
        if salary_range not in self.by_salary_range:
            self.by_salary_range[salary_range] = []
        self.by_salary_range[salary_range].append(employee)

    def find_by_id(self, emp_id):
        # 0(1) lookup by ID
        return self.by_id.get(emp_id)

    def find_by_department(self, department):
        # 0(1) lookup by department
        return self.by_department.get(department, [])

    def find_by_salary_range(self, min_salary, max_salary):
        # Find employee within salary range
        result = []
        for range_start in self.by_salary_range:
            if min_salary <= range_start <= max_salary:
                result.extend(self.by_salary_range[range_start])
        return result

def demonstrate_employee_directory():
        print("\n=== Employee Directory Example ====")

        directory = EmployeeDirectory()

        # Add sample employee
        employees = [
            ("E001", "John Doe", "IT", 75000),
            ("E002", "Jane Smith", "HR", 70000),
            ("E003", "Bob Wilson", "IT", 60000),
            ("E004", "Bob Steve", "Finance", 90000),
            ("E005", "Will Smith", "Account", 80000),
        ]

        for emp_id, name, dept, salary in employees:
            directory.add_employee(emp_id, name, dept, salary)
            print(f"Added : {name} ({dept})")

        # Demonstrate different search methods
        print("\nSearching by ID (E003) : ")
        emp = directory.find_by_id("E003")
        print(f"Found : {emp['name']} - {emp['department']}")

        print("\nIT Department Employee : ")
        it_emps = directory.find_by_department("IT")
        for emp in it_emps:
            print(f"{emp['name']} - ${emp['salary']}")

        print("\nEmployee with Salary 70000 - 80000 : ")
        salary_range = directory.find_by_salary_range(70000, 80000)
        for emp in salary_range:
            print(f"{emp['name']} - ${emp['salary']}")

demonstrate_employee_directory()


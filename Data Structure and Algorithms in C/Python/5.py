def binary_search_detailed(array, target, key=lambda x: x):
    """Detailed binary search implementation"""
    left = 0
    right = len(array) - 1
    comparisons = 0
    steps = []

    while left <= right:
        mid = (left + right) // 2
        comparisons += 1
        current_value = key(array[mid])

        steps.append({
            "left" : left,
            "right" : right,
            "mid" : mid,
            "current_value" : current_value,
            "action" : "comparison"
        })

        if current_value == target:
            steps[-1]["action"] = "found"
            return {
                "index" : mid,
                "comparisons" : comparisons,
                "steps" : steps,
                "found" : True
            }

        elif current_value < target:
            steps[-1]["action"] = "move_right"
            left = mid + 1

        else:
            steps[-1]["action"] = "move_left"
            right = mid - 1

    return {
        "index" : -1,
        "comparisons" : comparisons,
        "steps" : steps,
        "found" : False
    }


def grade_search_example():
    print("\n=== Student Grade Search Example ===")

    students = [
        {"id" : "S01", "name" : "Bob", "grade" : "75"},
        {"id" : "S02", "name" : "Alice", "grade" : "82"},
        {"id" : "S03", "name" : "Charlie", "grade" : "80"},
        {"id" : "S04", "name" : "David", "grade" : "88"},
        {"id" : "S05", "name" : "Mark", "grade" : "65"}
    ]

    target_grade = "88"
    result = binary_search_detailed(
        students, 
        target_grade,
        key=lambda x: x["grade"]
    )

    print(f"\nSearching for Grade : {target_grade}")
    if result["found"]:
        student = students[result['index']]
        print(f"Found student : {student['name']}")
        print("\nSearch Steps : ")
        for i, step in enumerate(result["steps"], 1):
            print(f"step {i} : ")
            print(f"Checking Range : {step['left']} to {step['right']}")
            print(f"Middle Element : {step['mid']}")
            print(f" Action : {step['action']}")

    else: 
        print("Grade Not Found")

grade_search_example()
def linear_search_detailed(array, target):
    """Detailed linear search implementation"""
    comparisons = 0

    for index in range(len(array)):
        comparisons += 1

        if array[index] == target:
            return {
                "index" : index,
                "comparisons" : comparisons,
                "found" : True,
                "search_path" : list(range(index + 1))
            }
    
    return {
        "index" : -1,
        "comparisons" : comparisons,
        "found" : False,
        "search_path" : list(range(len(array)))
    }

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

def library_search_example():
    print("\n=== Library Book Search Example ===")

    books = [
        {"id" : "B01", "title" : "Python Programming", "author" : "John Smith"},
        {"id" : "B02", "title" : "Data Structure", "author" : "John Doe"},
        {"id" : "B03", "title" : "Machine Learning", "author" : "Mick Brown"},
    ]

    search_id = "B03"

    result = linear_search_detailed(books, search_id)

    print(f"\nSearching for Book ID : {search_id}")
    if result["found"]:
        book = books[result['index']]
        print(f"Found : {book['title']} by {book['author']}")
        print(f"Comparisons made : {result['comparisons']}")

    else:
        print("Book is Not Available")
        print("\n")

library_search_example()
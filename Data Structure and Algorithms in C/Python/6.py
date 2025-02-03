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


def phone_directory_exampe():
    print("\n=== Phone Directory Search Example ===")

    contacts = [
        {"name" : "Adams, John", "phone" : "123-456-7890"},
        {"name" : "Brown, Mary", "phone" : "234-456-6789"},
        {"name" : "Davis, Steve", "phone" : "345-567-7890"},
        {"name" : "Johnson, Lisa", "phone" : "456-678-8901"},
        {"name" : "Wilson, Mike", "phone" : "567-789-0123"},
    ]

    search_name = "Davis, Steve"
    result = binary_search_detailed(
        contacts,
        search_name,
        key=lambda x: x["name"]
    )

    print(f"\nSearching for Contact : {search_name}")
    if result["found"]:
        contact = contacts[result["index"]]

        print(f"Found : {contact['name']}")
        print(f"Phone : {contact['phone']}")
        print(f"Found in : {result['comparisons']} comparisons")
        
    else:
        print("Contact Not Found")

phone_directory_exampe()
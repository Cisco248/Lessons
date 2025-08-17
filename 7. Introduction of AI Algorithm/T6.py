# Code Cell 6: Test Your Understanding
def test_agent_knowledge(your_answer, scenario):
    answers = {
        'traffic_light': 'Simple Reflex',
        'chess': 'Utility-Based',
        'shopping': 'Learning',
        'security': 'Model-Based',
        'self_driving': 'Hybrid'
    }
    
    if your_answer.lower() == answers[scenario].lower():
        print("\n")
        print(f"Correct! {answers[scenario]} is the best choice for {scenario}!")
        print("\n")
    else:
        print("\n")
        print(f"Think again! Consider why {answers[scenario]} might be best for {scenario}")
        print("\n")

# Example usage:
test_agent_knowledge('Simple Reflex', 'traffic_light')

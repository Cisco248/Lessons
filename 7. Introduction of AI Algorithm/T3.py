# Code Cell 3: Goal-Based Agent Example
class GoalBasedNavigator:
    def __init__(self, destination):
        self.destination = destination
        self.current_location = None
        self.route = []

    def plan_route(self, current_location):
        self.current_location = current_location
        # Simplified planning (in real GPS would be more complex)
        self.route = ['turn_right', 'go_straight', 'turn_left'] # Simplified route
        print(f"Route planned from {current_location} to {self.destination}")

    def act(self):
        if self.current_location == self.destination:
            return "arrived"
        if self.route:
            next_step = self.route.pop(0)
            return next_step
        return "recalculating"

# Example usage
navigator = GoalBasedNavigator("Airport")
navigator.plan_route("Home")
print("\n")
print(f"Next action: {navigator.act()}")
print("\n")
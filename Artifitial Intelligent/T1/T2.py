# Code Cell 2: Model-Based Reflex Agent Example
class ModelBasedVacuum:
    def __init__(self):
    # Internal state - map of the house
        self.room_states = {
            'Room A': 'unknown',
            'Room B': 'unknown'
        }
        self.current_location = 'Room A'

    def update_state(self, perception):
        # Update internal model
        dirt_status = perception['is_dirty']
        self.room_states[self.current_location] = 'dirty' if dirt_status else 'clean'
    
    def act(self, perception):
        # Update state first
        self.update_state(perception)
        # Make decision based on state and perception
        if perception['is_dirty']:
            return 'clean'
        elif all(state == 'clean' for state in self.room_states.values()):
            return 'do_nothing'
        else:
            return 'move_to_next_room'

# Example usage
vacuum = ModelBasedVacuum()
action = vacuum.act({'is_dirty': True})
print("\n")
print(f"Vacuum action: {action}")
print(f"Room states: {vacuum.room_states}")
print("\n")

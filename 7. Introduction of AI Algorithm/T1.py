# Code Cell 1: Simple Reflex Agent Example
class SimpleReflexThermostat:
    def __init__(self, desired_temp=20):
        self.desired_temp = desired_temp

    def act(self, current_temp):
        if current_temp > self.desired_temp:
            return "turn_off_heating"
        else:
            return "turn_on_heating"
        
# Example usage
thermostat = SimpleReflexThermostat(20)
action = thermostat.act(22) # Returns "turn_off_heating"
print("\n")
print(f"Action taken: {action}")
print("\n")

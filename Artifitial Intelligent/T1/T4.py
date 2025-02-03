class UtilityBasedThermostat:
    def __init__(self):
        self.comfort_preference = 0.6  # 60% weight on comfort
        self.energy_preference = 0.4  # 40% weight on saving energy

    def calculate_comfort(self, temperature):
        # Comfort calculation (ideal temp is 22°C)
        return 1.0 - abs(temperature - 22) / 10

    def calculate_energy_cost(self, energy_price, usage):
        # Energy cost calculation (lower cost = higher utility)
        cost_map = {"high": 0.2, "none": 1.0}
        return cost_map.get(usage, 0.0)

    def calculate_utility(self, action, temperature, energy_price):
        if action == "heat":
            comfort_utility = self.calculate_comfort(temperature + 1)
            energy_utility = self.calculate_energy_cost(energy_price, "high")
        elif action == "cool":
            comfort_utility = self.calculate_comfort(temperature - 1)
            energy_utility = self.calculate_energy_cost(energy_price, "high")
        else:  # do nothing
            comfort_utility = self.calculate_comfort(temperature)
            energy_utility = self.calculate_energy_cost(energy_price, "none")
        
        # Total utility considering preferences
        total_utility = (
            comfort_utility * self.comfort_preference + energy_utility * self.energy_preference
        )
        return total_utility

    def act(self, temperature, energy_price):
        # Calculate utilities for all possible actions
        utilities = {
            "heat": self.calculate_utility("heat", temperature, energy_price),
            "cool": self.calculate_utility("cool", temperature, energy_price),
            "do_nothing": self.calculate_utility("do_nothing", temperature, energy_price),
        }
        # Return the action with the highest utility
        return max(utilities, key=utilities.get)


# Example usage
smart_thermostat = UtilityBasedThermostat()
action = smart_thermostat.act(temperature=24, energy_price="high")
print("\n")
print(f"Chosen action: {action}")
print("\n")

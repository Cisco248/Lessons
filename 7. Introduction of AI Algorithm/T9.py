# First, let's define our base agent classes
class SimpleReflexAgent:

    def __init__(self):
        self.name = "Simple Reflex"
        self.actions_taken = 0

    def act(self, percept):
        self.actions_taken += 1
        return "action" if percept else "no_action"

class ModelBasedAgent:

    def __init__(self):
        self.name = "Model Based"
        self.internal_state = {}
        self.actions_taken = 0

    def act(self, percept):
        self.actions_taken += 1
        self.internal_state.update(percept)
        return "model_based_action"

class GoalBasedAgent:
    def __init__(self):
        self.name = "Goal Based"
        self.goals = []
        self.actions_taken = 0

    def act(self, percept):
        self.actions_taken += 1
        return "goal_directed_action"

class UtilityBasedAgent:
    
    def __init__(self):
        self.name = "Utility Based"
        self.utility_function = lambda x: x
        self.actions_taken = 0
    def act(self, percept):
        self.actions_taken += 1
        return "utility_maximizing_action"

class LearningAgent:
    
    def __init__(self):
        self.name = "Learning"
        self.knowledge = {}
        self.actions_taken = 0
    
    def act(self, percept):
        self.actions_taken += 1
        self.knowledge.update(percept)
        return "learned_action"
    
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

def compare_agent_performance(num_trials=100):
    # Initialize agents
    agents = {
        'Simple Reflex': SimpleReflexAgent(),
        'Model Based': ModelBasedAgent(),
        'Goal Based': GoalBasedAgent(),
        'Utility Based': UtilityBasedAgent(),
        'Learning': LearningAgent()
    }
    
    # Results storage
    results = {
        'Agent Type': [],
        'Average Performance': [],
        'Response Time': [],
        'Success Rate': []
    }

    # Base metrics for agents
    base_performance = {
        'Simple Reflex': 60,
        'Model Based': 70,
        'Goal Based': 75,
        'Utility Based': 85,
        'Learning': 90
    }

    base_response = {
        'Simple Reflex': 0.1,
        'Model Based': 0.3,
        'Goal Based': 0.5,
        'Utility Based': 0.7,
        'Learning': 0.9
    }
    
    # Simulate each agent
    for agent_type, agent in agents.items():
        # Calculate metrics with some random variation
        performance = np.random.normal(base_performance[agent_type], 5)
        response_time = np.random.exponential(base_response[agent_type])
        success = np.random.binomial(100, base_performance[agent_type] / 100) / 100
        
        results['Agent Type'].append(agent_type)
        results['Average Performance'].append(performance)
        results['Response Time'].append(response_time)
        results['Success Rate'].append(success)
    
    # Create DataFrame
    df = pd.DataFrame(results)
    
    # Visualize results
    plt.figure(figsize=(15, 6))
    
    # Performance Comparison
    plt.subplot(1, 2, 1)
    bars = plt.bar(df['Agent Type'], df['Average Performance'], color='skyblue')
    plt.title('Performance Comparison')
    plt.xticks(rotation=45)
    plt.ylabel('Performance Score')
    for bar in bars:
        height = bar.get_height()
        plt.text(bar.get_x() + bar.get_width()/2., height, f'{height:.1f}', ha='center', va='bottom')
    
    # Response Time vs Success Rate
    plt.subplot(1, 2, 2)
    scatter = plt.scatter(df['Response Time'], df['Success Rate'], c=range(len(df)), cmap='viridis', s=100)
    for i, txt in enumerate(df['Agent Type']):
        plt.annotate(txt, (df['Response Time'][i], df['Success Rate'][i]), xytext=(5, 5), textcoords='offset points')
    plt.xlabel('Response Time (seconds)')
    plt.ylabel('Success Rate')
    plt.title('Response Time vs Success Rate')
    
    plt.tight_layout()
    plt.show()
    
    return df

# Run the comparison
print("Running agent performance comparison...")
performance_data = compare_agent_performance()
print("\nDetailed Performance Metrics:")
print(performance_data)

# Add some analysis
print("\nAnalysis:")
best_performer = performance_data.loc[performance_data['Average Performance'].idxmax()]
fastest_agent = performance_data.loc[performance_data['Response Time'].idxmin()]
most_successful = performance_data.loc[performance_data['Success Rate'].idxmax()]

print(f"\nBest Overall Performance: {best_performer['Agent Type']} "
      f"(Score: {best_performer['Average Performance']:.1f})")
print(f"Fastest Response Time: {fastest_agent['Agent Type']} "
      f"(Time: {fastest_agent['Response Time']:.3f} seconds)")
print(f"Highest Success Rate: {most_successful['Agent Type']} "
      f"(Rate: {most_successful['Success Rate']:.1%})")

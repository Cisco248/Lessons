# Code Cell: Interactive Decision Making
from ipywidgets import interact, widgets

def simulate_agent_decision(agent_type, scenario):
    decisions = {
        'Simple Reflex': {
            'obstacle_ahead': 'turn_right',
            'goal_in_sight': 'move_forward',
            'unknown_situation': 'stop'
        },

        'Model Based': {
            'obstacle_ahead': 'check_map_and_reroute',
            'goal_in_sight': 'verify_and_move',
            'unknown_situation': 'update_model'
        },
        
        'Goal Based': {
            'obstacle_ahead': 'plan_new_path',
            'goal_in_sight': 'optimize_path',
            'unknown_situation': 'evaluate_goals'
        }
    }
    print("\n")
    print(f"{agent_type} agent's decision in {scenario}: {decisions[agent_type][scenario]}")
    print("\n")
    return
    
# Create interactive widget
interact(simulate_agent_decision, agent_type=['Simple Reflex', 'Model Based', 'Goal Based'], scenario=['obstacle_ahead', 'goal_in_sight', 'unknown_situation'])


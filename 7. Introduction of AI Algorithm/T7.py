# Code Cell: Visual Environment Setup
import matplotlib.pyplot as plt
import numpy as np

class GridWorld:
    
    def __init__(self, size=5):
        self.size = size
        self.grid = np.zeros((size, size))
        self.agent_pos = [0, 0]

    def add_obstacles(self, n=3):
        for _ in range(n):
            x, y = np.random.randint(0, self.size, 2)
            if [x, y] != self.agent_pos:
                self.grid[x, y] = 1
    
    def visualize(self):
        plt.figure(figsize=(8, 8))
        plt.imshow(self.grid, cmap='Pastel1')
        plt.plot(self.agent_pos[1], self.agent_pos[0], 'ro', markersize=15, label='Agent')
        plt.grid(True)
        plt.title('Agent in GridWorld')
        plt.legend()
        plt.show()

# Create and display environment
world = GridWorld()
world.add_obstacles()
world.visualize()
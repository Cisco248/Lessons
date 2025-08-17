# Code Cell 5: Learning Agent Example
class LearningRecommender:
    
    def __init__(self):
        self.user_preferences = {}
        self.success_rate = {}
    
    def learn_from_feedback(self, recommendation, user_liked):
        if recommendation not in self.success_rate:
            self.success_rate[recommendation] = []
            self.success_rate[recommendation].append(1 if user_liked else 0)
            print(f"Learning: {'👍' if user_liked else '👎'} for {recommendation}")
    
    def make_recommendation(self, user_history):
        # Start with random recommendations
        if not self.success_rate:
            return "random_product"
        # Use learned preferences
        best_recommendation = max(self.success_rate.items(), key=lambda x: sum(x[1]) / len(x[1]))[0]
        return best_recommendation

# Example usage
recommender = LearningRecommender()
recommendation = recommender.make_recommendation(["previous_purchases"])
recommender.learn_from_feedback(recommendation, user_liked=True)
print("\n")
print(f"Success rates: {recommender.success_rate}")
print("\n")

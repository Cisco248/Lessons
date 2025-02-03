class SimpleHashTable:
    # A basic hash table implementation using chaining for collision resolution

    def __init__(self, size=100):
        self.size = size
        self.table = [[] for __ in range(size)]

    def __hash(self, key):
        # Simple Hash Function
        return hash(key) % self.size
    
    def insert(self, key, value):
        # Insert a Key Value Pair
        index = self.__hash(key)

        # Check for exiting key 
        for item in self.table[index]:
            if item[0] == key:
                item[1] = value # Update Value
                return
        
        self.table[index].append([key, value])

    def get(self, key):
        # Retrieve Value for given key
        index = self.__hash(key)

        for item in self.table[index]:
            if item[0] == key:
                return item[1]
        return None
    
    def delete(self, key):
        # Delete a key-value pair
        index = self.__hash(key)

        for i, item in enumerate(self.table[index]):
            if item[0] == key:
                return self.table[index].pop(i)[1]
        return None
    
    
        
// ============================================================
// BASIC OBJECTS
// ============================================================

const user = {
    name: "Lahiru",
    age: 25,
    isAdmin: true,
};

// Dot notation
console.log(user.name);

// Bracket notation
console.log(user["age"]);

// Update property
user.age = 26;

export { user };

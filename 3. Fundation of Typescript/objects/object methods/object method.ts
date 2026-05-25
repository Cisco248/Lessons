// ============================================================
// OBJECT METHODS — BUILT-IN & CUSTOM
// ============================================================

const user = { name: "Lahiru", age: 25, role: "admin" };

// Object.keys() — property names
const keys = Object.keys(user);

// Object.values() — property values
const values = Object.values(user);

// Object.entries() — [key, value] pairs
const entries = Object.entries(user);

// Object.assign() — merge objects
const extra = { email: "lahiru@dev.com" };
const merged = Object.assign({}, user, extra);

// Custom method on object
const greeter = {
    name: "World",
    greet(this: { name: string }) {
        return `Hello, ${this.name}`;
    },
};

const greeting = greeter.greet();

export { user, keys, values, entries, merged, greeter, greeting };

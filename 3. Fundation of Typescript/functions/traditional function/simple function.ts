// ============================================================
// SIMPLE TRADITIONAL FUNCTIONS
// ============================================================

// 1. Basic function declaration (return type inferred as string)
function greet(name: string) {
    return `Hello, ${name}`;
}

// 2. Explicit return type
function add(a: number, b: number): number {
    return a + b;
}

// 3. No parameters
function sayHello(): string {
    return "Hello, World!";
}

// 4. Call functions
const greeting = greet("Lahiru");       // "Hello, Lahiru"
const sum = add(5, 3);                // 8
const hello = sayHello();             // "Hello, World!"

console.log(greeting, sum, hello);

export { greet, add, sayHello, greeting, sum, hello };

// ============================================================
// BASIC ARROW FUNCTIONS
// ============================================================

const loginUser = (username: string, password: string): string => {
    return `${username} logged in`;
};

const getHello = (text: string): string => {
    return `Hello ${text}`;
};

// Implicit return (single expression, no braces)
const double = (n: number) => n * 2;

const log_var = loginUser("Lahiru", "secret");
const hello = getHello("World");
const doubled = double(5);

console.log(log_var, hello, doubled);

export { loginUser, getHello, double, log_var, hello, doubled };

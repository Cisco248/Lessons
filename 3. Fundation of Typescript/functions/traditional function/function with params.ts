// ============================================================
// FUNCTION PARAMETERS — REQUIRED & TYPED
// ============================================================

function signUpUser(
    name: string,
    email: string,
    password: string,
    isPaid: boolean
): string {
    return `${name}, ${email}, ${password}, paid: ${isPaid}`;
}

// Multiple types in parameters
function describe(value: string | number): string {
    return `Type: ${typeof value}, Value: ${value}`;
}

// Object parameter (inline type)
function printUser(user: { name: string; age: number }): void {
    console.log(`${user.name} is ${user.age}`);
}

const signup = signUpUser("Lahiru", "lahiru@dev.com", "secret", true);
const desc = describe(42);
printUser({ name: "Alex", age: 30 });

export { signUpUser, describe, printUser, signup, desc };

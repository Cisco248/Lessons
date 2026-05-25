// ============================================================
// INFERRED RETURN TYPES (no explicit annotation)
// ============================================================
// TypeScript infers return type from return statements

function consoleError(errmsg: string) {
    return errmsg;  // inferred as string
}

const multiply = (a: number, b: number) => a * b;  // inferred as number

function getMessage() {
    return "Hello";  // inferred as string
}

const err = consoleError("404 Not Found");
const product = multiply(3, 4);
const msg = getMessage();

export { consoleError, multiply, getMessage, err, product, msg };

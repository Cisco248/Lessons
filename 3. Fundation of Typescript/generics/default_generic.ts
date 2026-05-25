// ============================================================
// DEFAULT GENERIC TYPE PARAMETERS
// ============================================================

// T defaults to string if not provided
function createLabel<T = string>(value: T): T {
    return value;
}

// Multiple defaults
function createResponse<T = string, U = number>(
    message: T,
    code: U
): { message: T; code: U } {
    return { message, code };
}

class Container<T = unknown> {
    constructor(private value: T) {}

    get(): T {
        return this.value;
    }
}

const defaultStr = createLabel();           // T = string
const customNum = createLabel(42);            // T = number
const response = createResponse("OK", 200);
const container = new Container(true);

export { createLabel, createResponse, Container, defaultStr, customNum, response, container };

// ============================================================
// FUNCTION RETURN TYPE: object
// ============================================================

function returnObject(): object {
    return { name: "object" };
}

// Prefer specific types over generic `object`
type User = { id: number; name: string };

function createUser(id: number, name: string): User {
    return { id, name };
}

function returnRecord(): Record<string, number> {
    return { a: 1, b: 2 };
}

const genericObj = returnObject();
const user = createUser(1, "Lahiru");
const record = returnRecord();

export { returnObject, createUser, returnRecord, genericObj, user, record };

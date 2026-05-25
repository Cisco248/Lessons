// ============================================================
// any, unknown, never, null, undefined
// ============================================================

// any — disables type checking (avoid)
let data: any = "hello";
data = 42;
data = true;

// unknown — safe; must narrow before use
let input: unknown = "text";
if (typeof input === "string") {
    console.log(input.toUpperCase());
}

// never — function never returns normally
function fail(message: string): never {
    throw new Error(message);
}

// null & undefined
let empty: null = null;
let missing: undefined = undefined;

let optional: string | undefined = undefined;
optional = "value";

export { data, input, fail, empty, missing, optional };

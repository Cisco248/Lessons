// ============================================================
// TYPE INFERENCE & ANNOTATIONS
// ============================================================

// Inferred as string
let city = "Colombo";

// Explicit annotation
let country: string = "Sri Lanka";

// Union inference
let id = "ABC101";
id = "XYZ202";  // still string

let flexible: string | number = 101;
flexible = "ABC101";

// const inference — literal types
const MAX_SIZE = 100;  // type 100 (literal) or number depending on strictness

export { city, country, id, flexible, MAX_SIZE };

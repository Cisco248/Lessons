// ============================================================
// BASIC TUPLES
// ============================================================
// Fixed-length arrays with a specific type per position

let coords: [number, number] = [10, 20];
let userTuple: [string, number] = ["Lahiru", 25];
let mixed: [string, number, boolean] = ["active", 1, true];

// Access by index
const x = coords[0];
const name = userTuple[0];

// Tuple type alias
type Point = [number, number];
const origin: Point = [0, 0];

export { coords, userTuple, mixed, origin, x, name };

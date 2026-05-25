// ============================================================
// let, const, and var
// ============================================================

// let — block-scoped, reassignable
let count: number = 0;
count = 1;

// const — block-scoped, cannot reassign
const PI: number = 3.14159;
// PI = 3.14;  // Error

// const object — properties can change, reference cannot
const user = { name: "Lahiru" };
user.name = "Alex";  // OK
// user = {};        // Error

// var — function-scoped (avoid in modern TS)
function demo() {
    var legacy = "old style";
    return legacy;
}

export { count, PI, user, demo };

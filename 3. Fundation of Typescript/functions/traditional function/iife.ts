// ============================================================
// IIFE — Immediately Invoked Function Expression
// ============================================================

// Runs once at definition time
(function () {
    console.log("IIFE executed");
})();

// With parameters
(function (name: string) {
    console.log(`Hello, ${name}`);
})("Lahiru");

// Arrow IIFE
(() => {
    const secret = 42;
    console.log("Arrow IIFE", secret);
})();

// Return value from IIFE
const config = (() => {
    return { apiUrl: "/api", timeout: 5000 };
})();

export { config };

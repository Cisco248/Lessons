// ============================================================
// OPTIONAL & DEFAULT PARAMETERS
// ============================================================

// Default parameter — used when argument is omitted
function greet(name: string = "Guest"): string {
    return `Hello, ${name}`;
}

// Optional parameter (?)
function buildUrl(path: string, version?: string): string {
    return version ? `/${version}${path}` : path;
}

// Default + optional together
function createUser(
    name: string,
    role: string = "user",
    active: boolean = true
): object {
    return { name, role, active };
}

console.log(greet());                    // "Hello, Guest"
console.log(greet("Lahiru"));            // "Hello, Lahiru"
console.log(buildUrl("/api"));           // "/api"
console.log(buildUrl("/api", "v2"));     // "/v2/api"

export { greet, buildUrl, createUser };

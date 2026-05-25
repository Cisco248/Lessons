// ============================================================
// UNIONS IN FUNCTION PARAMETERS & RETURNS
// ============================================================

function formatValue(value: string | number | boolean): string {
    if (typeof value === "string") return value;
    if (typeof value === "number") return value.toString();
    return value ? "true" : "false";
}

function findUser(id: number): { name: string } | null {
    if (id === 1) return { name: "Lahiru" };
    return null;
}

function parseInput(input: string): string | number {
    const num = Number(input);
    return isNaN(num) ? input : num;
}

const formatted = formatValue(42);
const user = findUser(1);
const parsed = parseInput("100");

export { formatValue, findUser, parseInput, formatted, user, parsed };

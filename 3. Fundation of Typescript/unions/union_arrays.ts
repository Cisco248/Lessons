// ============================================================
// UNION TYPES IN ARRAYS
// ============================================================

const mixed: (string | number)[] = ["hello", 42, "world", 100];
const flags: (boolean | string)[] = [true, "active", false];

function processItems(items: (string | number)[]): string[] {
    return items.map((item) =>
        typeof item === "string" ? item.toUpperCase() : item.toString()
    );
}

const result = processItems(mixed);

export { mixed, flags, processItems, result };

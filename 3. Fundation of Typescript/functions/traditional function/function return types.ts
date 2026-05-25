// ============================================================
// UNION RETURN TYPES
// ============================================================

function getValue(myVal: number): boolean | string {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}

function parseId(input: string | number): string | number {
    if (typeof input === "string") {
        return parseInt(input, 10);
    }
    return input.toString();
}

const boolResult = getValue(10);       // true
const strResult = getValue(3);         // "200 OK"
const parsed = parseId("42");          // 42

export { getValue, parseId, boolResult, strResult, parsed };

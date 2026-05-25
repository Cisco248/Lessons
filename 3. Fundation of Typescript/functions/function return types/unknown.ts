// ============================================================
// FUNCTION RETURN TYPE: unknown
// ============================================================
// Safer than any — caller must narrow before use

function returnUnknown(): unknown {
    return "could be anything";
}

function parseJsonSafe(json: string): unknown {
    try {
        return JSON.parse(json);
    } catch {
        return null;
    }
}

const data = returnUnknown();

if (typeof data === "string") {
    console.log(data.toUpperCase());
}

const parsed = parseJsonSafe('{"name":"Lahiru"}');

export { returnUnknown, parseJsonSafe, data, parsed };

// ============================================================
// FUNCTION RETURN TYPE: union (A | B)
// ============================================================

function getStatus(code: number): "success" | "error" {
    return code === 200 ? "success" : "error";
}

function findUser(id: number): { id: number; name: string } | null {
    if (id === 1) return { id: 1, name: "Lahiru" };
    return null;
}

function parse(input: string): string | number {
    const num = Number(input);
    return isNaN(num) ? input : num;
}

const status = getStatus(200);
const user = findUser(1);
const parsed = parse("42");

export { getStatus, findUser, parse, status, user, parsed };

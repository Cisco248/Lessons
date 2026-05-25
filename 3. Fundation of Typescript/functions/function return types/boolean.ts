// ============================================================
// FUNCTION RETURN TYPE: boolean
// ============================================================

function returnBoolean(): boolean {
    return true;
}

const isAdult = (age: number): boolean => age >= 18;

function hasPermission(role: string): boolean {
    return role === "admin" || role === "editor";
}

const flag = returnBoolean();
const adult = isAdult(20);
const allowed = hasPermission("admin");

export { returnBoolean, isAdult, hasPermission, flag, adult, allowed };

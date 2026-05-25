// ============================================================
// FUNCTION RETURN TYPE: any
// ============================================================
// Disables return type checking — avoid when possible

function returnAny(): any {
    return { key: "value" };
}

function returnAnything(flag: boolean): any {
    if (flag) return "string";
    return 42;
}

const obj = returnAny();
const mixed = returnAnything(true);

export { returnAny, returnAnything, obj, mixed };

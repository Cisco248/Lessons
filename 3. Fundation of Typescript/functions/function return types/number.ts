// ============================================================
// FUNCTION RETURN TYPE: number
// ============================================================

function returnNumber(): number {
    return 42;
}

const arrowReturnNumber = (): number => 100;

function add(a: number, b: number): number {
    return a + b;
}

const result = returnNumber();
const arrowResult = arrowReturnNumber();
const sum = add(10, 20);

export { returnNumber, arrowReturnNumber, add, result, arrowResult, sum };

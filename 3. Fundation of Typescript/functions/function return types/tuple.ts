// ============================================================
// FUNCTION RETURN TYPE: tuple
// ============================================================

function getCoordinates(): [number, number] {
    return [10, 20];
}

function getUserTuple(): [string, number, boolean] {
    return ["Lahiru", 25, true];
}

function swap(a: number, b: number): [number, number] {
    return [b, a];
}

const [x, y] = getCoordinates();
const [name, age, active] = getUserTuple();
const swapped = swap(1, 2);

export { getCoordinates, getUserTuple, swap, x, y, name, age, active, swapped };

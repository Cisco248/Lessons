// ============================================================
// TUPLE DESTRUCTURING
// ============================================================

const rgb: [number, number, number] = [255, 128, 0];

const [red, green, blue] = rgb;

function getUser(): [string, number, boolean] {
    return ["Lahiru", 25, true];
}

const [userName, age, isActive] = getUser();

// Skip elements with empty slots
const point: [number, number, number] = [10, 20, 30];
const [, y, z] = point;

export { rgb, red, green, blue, userName, age, isActive, y, z };

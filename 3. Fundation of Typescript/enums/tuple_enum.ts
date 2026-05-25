// ============================================================
// TUPLE ENUMS IN TYPESCRIPT
// ============================================================
// Tuple enums store fixed-length, typed arrays as values.
// Use `as const` so TypeScript infers readonly tuple types.

const Coordinate = {
    Origin: [0, 0] as const,
    TopRight: [100, 0] as const,
    BottomLeft: [0, 100] as const,
    Center: [50, 50] as const,
} as const;

const RgbColor = {
    Red: [255, 0, 0] as const,
    Green: [0, 255, 0] as const,
    Blue: [0, 0, 255] as const,
    White: [255, 255, 255] as const,
} as const;

const RecordTuple = {
    User: ["user", 1, true] as const,       // [name, id, active]
    Guest: ["guest", 0, false] as const,
} as const;

type Coordinate = typeof Coordinate[keyof typeof Coordinate];
type RgbColor = typeof RgbColor[keyof typeof RgbColor];
type RecordTuple = typeof RecordTuple[keyof typeof RecordTuple];

// ============================================================
// METHOD 1: Direct dot notation (name → tuple)
// ============================================================
const point: Coordinate = Coordinate.Origin;       // [0, 0]
const red: RgbColor = RgbColor.Red;                // [255, 0, 0]

// ============================================================
// METHOD 2: Bracket notation with variable key
// ============================================================
const coordKey: keyof typeof Coordinate = "Center";
const pointFromKey = Coordinate[coordKey];         // [50, 50]

// ============================================================
// METHOD 3: Destructure tuple enum values by position
// ============================================================
const [x, y] = Coordinate.TopRight;                // x = 100, y = 0
const [r, g, b] = RgbColor.Blue;                   // r = 0, g = 0, b = 255
const [name, id, active] = RecordTuple.User;       // "user", 1, true

// ============================================================
// METHOD 4: Index access on tuple elements
// ============================================================
const first = Coordinate.Center[0];                // 50
const second = Coordinate.Center[1];               // 50
const alphaChannel = RgbColor.White[2];            // 255

// ============================================================
// METHOD 5: Object.keys() / values() / entries()
// ============================================================
const coordKeys = Object.keys(Coordinate);
const coordValues = Object.values(Coordinate);
const coordEntries = Object.entries(Coordinate);

// ============================================================
// METHOD 6: for...in loop with destructuring
// ============================================================
for (const key in Coordinate) {
    const [px, py] = Coordinate[key as keyof typeof Coordinate];
    console.log(`${key}: (${px}, ${py})`);
}

// ============================================================
// METHOD 7: Array methods on tuple enum collections
// ============================================================
const allPoints = Object.values(Coordinate);

const hasOrigin = allPoints.some(
    ([px, py]) => px === 0 && py === 0
);                                                 // true

const mappedColors = Object.entries(RgbColor).map(([name, [cr, cg, cb]]) => ({
    name,
    hex: `#${cr.toString(16)}${cg.toString(16)}${cb.toString(16)}`,
}));

// ============================================================
// METHOD 8: keyof typeof — type-safe tuple enum names
// ============================================================
type CoordName = keyof typeof Coordinate;

function getCoordinate(name: CoordName): Coordinate {
    return Coordinate[name];
}

const bottomLeft = getCoordinate("BottomLeft");    // [0, 100]

// ============================================================
// METHOD 9: Compare tuple enum values
// ============================================================
function tuplesEqual(
    a: readonly [number, number],
    b: readonly [number, number]
): boolean {
    return a[0] === b[0] && a[1] === b[1];
}

const isOrigin = tuplesEqual(point, Coordinate.Origin);  // true

// ============================================================
// METHOD 10: Find tuple by element value
// ============================================================
function findCoordByX(targetX: number): CoordName | undefined {
    return (Object.keys(Coordinate) as CoordName[]).find(
        (key) => Coordinate[key][0] === targetX
    );
}

const found = findCoordByX(100);                   // "TopRight"

// ============================================================
// METHOD 11: Build new tuple from enum (transform)
// ============================================================
function scalePoint(
    tuple: Coordinate,
    factor: number
): [number, number] {
    return [tuple[0] * factor, tuple[1] * factor];
}

const scaled = scalePoint(Coordinate.Center, 2);   // [100, 100]

export {
    Coordinate,
    RgbColor,
    RecordTuple,
    point,
    red,
    pointFromKey,
    x,
    y,
    r,
    g,
    b,
    coordKeys,
    coordValues,
    coordEntries,
    hasOrigin,
    mappedColors,
    getCoordinate,
    tuplesEqual,
    findCoordByX,
    scalePoint,
    scaled,
};

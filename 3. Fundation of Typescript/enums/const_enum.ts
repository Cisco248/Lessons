// ============================================================
// CONST ENUMS IN TYPESCRIPT
// ============================================================
// `const enum` is inlined at compile time — no runtime object.
// Use for performance; avoid if you need Object.keys() at runtime.

const enum Compass {
    North = 0,
    East = 90,
    South = 180,
    West = 270,
}

const enum Size {
    Small = "sm",
    Medium = "md",
    Large = "lg",
}

// ============================================================
// METHOD 1: Direct dot notation (inlined to literal at compile)
// ============================================================
const heading: Compass = Compass.East;             // 90
const shirtSize: Size = Size.Medium;               // "md"

// ============================================================
// METHOD 2: Use in switch statements
// ============================================================
function getDirectionLabel(dir: Compass): string {
    switch (dir) {
        case Compass.North:
            return "North";
        case Compass.East:
            return "East";
        case Compass.South:
            return "South";
        case Compass.West:
            return "West";
    }
}

const label = getDirectionLabel(heading);          // "East"

// ============================================================
// METHOD 3: Compare const enum values
// ============================================================
const isEast = heading === Compass.East;           // true

// ============================================================
// METHOD 4: Pass as function arguments (type-safe)
// ============================================================
function setSize(size: Size): void {
    console.log(`Size set to: ${size}`);
}

setSize(Size.Large);

// ============================================================
// METHOD 5: Array of allowed values (manual — no runtime enum)
// ============================================================
const compassValues: Compass[] = [
    Compass.North,
    Compass.East,
    Compass.South,
    Compass.West,
];

const sizeValues: Size[] = [Size.Small, Size.Medium, Size.Large];

// ============================================================
// METHOD 6: .includes() on manual array
// ============================================================
const isValidHeading = compassValues.includes(heading);  // true

// ============================================================
// METHOD 7: .find() on manual array
// ============================================================
const found = compassValues.find((v) => v === Compass.South);  // 180

// ============================================================
// NOTE: Object.keys/values/entries do NOT work on const enum
// because they are erased at compile time. Use regular enum or
// `as const` object when you need runtime iteration.
// ============================================================

// Alternative: regular enum when runtime access is needed
enum RuntimeCompass {
    North = 0,
    East = 90,
    South = 180,
    West = 270,
}

const runtimeKeys = Object.keys(RuntimeCompass).filter(
    (k) => isNaN(Number(k))
);

export {
    Compass,
    Size,
    heading,
    shirtSize,
    getDirectionLabel,
    label,
    isEast,
    compassValues,
    sizeValues,
    isValidHeading,
    found,
    RuntimeCompass,
    runtimeKeys,
};

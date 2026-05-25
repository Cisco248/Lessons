// ============================================================
// STRING ENUMS IN TYPESCRIPT
// ============================================================
// String enums use string values for each member.
// There is NO reverse mapping (unlike numeric enums).

enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE",
}

enum HttpMethod {
    Get = "GET",
    Post = "POST",
    Put = "PUT",
    Delete = "DELETE",
}

// ============================================================
// METHOD 1: Direct dot notation (name → string value)
// ============================================================
const theme: Color = Color.Red;                    // "RED"
const method: HttpMethod = HttpMethod.Post;        // "POST"

// ============================================================
// METHOD 2: Bracket notation with variable key
// ============================================================
const colorKey: keyof typeof Color = "Green";
const colorFromKey = Color[colorKey];              // "GREEN"

// ============================================================
// METHOD 3: Check if a value exists in the enum
// ============================================================
function isColorValue(value: string): value is Color {
    return Object.values(Color).includes(value as Color);
}

const validColor = isColorValue("RED");            // true
const invalidColor = isColorValue("YELLOW");       // false

// ============================================================
// METHOD 4: Object.keys() — member names only (no reverse map)
// ============================================================
const colorKeys = Object.keys(Color);
// ["Red", "Green", "Blue"]

// ============================================================
// METHOD 5: Object.values() — string values only
// ============================================================
const colorValues = Object.values(Color);
// ["RED", "GREEN", "BLUE"]

// ============================================================
// METHOD 6: Object.entries() — [name, value] pairs
// ============================================================
const colorEntries = Object.entries(Color);
// [["Red", "RED"], ["Green", "GREEN"], ["Blue", "BLUE"]]

// ============================================================
// METHOD 7: for...in loop
// ============================================================
for (const key in Color) {
    console.log(`${key} = ${Color[key as keyof typeof Color]}`);
}

// ============================================================
// METHOD 8: Array methods on enum values
// ============================================================
const hasRed = colorValues.includes(Color.Red);    // true
const found = colorValues.find((v) => v === Color.Blue);  // "BLUE"

const colorOptions = colorEntries.map(([label, value]) => ({
    label,
    value,
}));

// ============================================================
// METHOD 9: keyof typeof — type-safe member names
// ============================================================
type ColorName = keyof typeof Color;               // "Red" | "Green" | "Blue"
type ColorValue = `${Color}`;                      // "RED" | "GREEN" | "BLUE"

function getColorByName(name: ColorName): Color {
    return Color[name];
}

const green = getColorByName("Green");             // "GREEN"

// ============================================================
// METHOD 10: Find member name from value (manual reverse lookup)
// ============================================================
function getColorName(value: Color): ColorName | undefined {
    return (Object.keys(Color) as ColorName[]).find(
        (key) => Color[key] === value
    );
}

const nameFromValue = getColorName(Color.Blue);    // "Blue"

// ============================================================
// METHOD 11: Helper functions
// ============================================================
function getStringEnumKeys<T extends object>(enumObj: T): (keyof T)[] {
    return Object.keys(enumObj) as (keyof T)[];
}

function getStringEnumValues<T extends Record<string, string>>(enumObj: T): string[] {
    return Object.values(enumObj);
}

const keys = getStringEnumKeys(Color);
const values = getStringEnumValues(HttpMethod);

export {
    Color,
    HttpMethod,
    theme,
    method,
    colorFromKey,
    isColorValue,
    colorKeys,
    colorValues,
    colorEntries,
    colorOptions,
    getColorByName,
    getColorName,
    getStringEnumKeys,
    getStringEnumValues,
};

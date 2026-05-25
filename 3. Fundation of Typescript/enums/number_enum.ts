// ============================================================
// NUMBER ENUMS IN TYPESCRIPT
// ============================================================
// Numeric enums assign integer values to each member.
// TypeScript also creates a reverse mapping (value → name),
// which only works for numeric enums — not string enums.

// --- Example 1: Auto-increment (starts at 0) ---
enum Status {
    Pending,    // 0
    Active,     // 1
    Completed,  // 2
    Cancelled,  // 3
}

// --- Example 2: Manual values ---
enum Priority {
    Low = 1,
    Medium = 2,
    High = 3,
    Critical = 10,
}

// --- Example 3: Mixed (first value sets the start, rest auto-increment) ---
enum Direction {
    North = 1,
    East,   // 2
    South,  // 3
    West,   // 4
}

// ============================================================
// METHOD 1: Direct dot notation (name → number)
// ============================================================
const currentStatus: Status = Status.Active;       // 1
const currentPriority: Priority = Priority.High;   // 3
const facing: Direction = Direction.South;         // 3

// ============================================================
// METHOD 2: Reverse lookup with bracket notation (number → name)
// Works only on numeric enums
// ============================================================
const statusName = Status[1];           // "Active"
const priorityName = Priority[3];       // "High"
const directionName = Direction[2];     // "East"

// ============================================================
// METHOD 3: Bracket notation with a variable key
// ============================================================
const key: keyof typeof Status = "Pending";
const statusFromKey = Status[key];      // 0

const numericKey = 2;
const statusFromNumber = Status[numericKey];  // "Completed" (reverse lookup)

// ============================================================
// METHOD 4: Check if a value exists in the enum
// ============================================================
function isStatusValue(value: number): value is Status {
    return value in Status;
}

const valid = isStatusValue(1);    // true
const invalid = isStatusValue(99); // false

// ============================================================
// METHOD 5: Object.keys() — returns member names AND numeric strings
// Numeric enums produce duplicate entries due to reverse mapping
// ============================================================
const allStatusKeys = Object.keys(Status);
// ["0", "1", "2", "3", "Pending", "Active", "Completed", "Cancelled"]

// Filter to get only string member names (exclude numeric reverse keys)
const statusNamesOnly = Object.keys(Status).filter(
    (key) => isNaN(Number(key))
);
// ["Pending", "Active", "Completed", "Cancelled"]

// ============================================================
// METHOD 6: Object.values() — returns numbers AND string names
// ============================================================
const allStatusValues = Object.values(Status);
// [0, 1, 2, 3, "Pending", "Active", "Completed", "Cancelled"]

// Filter to get only numeric values
const statusNumbersOnly = Object.values(Status).filter(
    (value) => typeof value === "number"
) as Status[];
// [0, 1, 2, 3]

// Filter to get only string names (reverse mapping values)
const statusLabelsOnly = Object.values(Status).filter(
    (value) => typeof value === "string"
);
// ["Pending", "Active", "Completed", "Cancelled"]

// ============================================================
// METHOD 7: Object.entries() — [key, value] pairs (includes reverse map)
// ============================================================
const allStatusEntries = Object.entries(Status);
// [["0","Pending"], ["1","Active"], ..., ["Pending",0], ["Active",1], ...]

// Forward entries only: name → number
const forwardEntries = Object.entries(Status).filter(
    ([key]) => isNaN(Number(key))
);
// [["Pending", 0], ["Active", 1], ["Completed", 2], ["Cancelled", 3]]

// ============================================================
// METHOD 8: for...in loop — iterate all keys (names + numeric strings)
// ============================================================
for (const key in Status) {
    if (isNaN(Number(key))) {
        // Forward: member name → numeric value
        console.log(`${key} = ${Status[key as keyof typeof Status]}`);
    }
}

// ============================================================
// METHOD 9: Array methods on filtered enum values
// ============================================================
const statusList = (Object.values(Status) as (string | Status)[])
    .filter((v): v is Status => typeof v === "number");

// .includes() — check if a number is a valid enum value
const hasActive = statusList.includes(Status.Active);  // true

// .find() — get first matching value
const found = statusList.find((v) => v === Status.Completed);  // 2

// .map() — build objects from enum data
const statusOptions = statusNamesOnly.map((name) => ({
    label: name,
    value: Status[name as keyof typeof Status],
}));
// [{ label: "Pending", value: 0 }, { label: "Active", value: 1 }, ...]

// ============================================================
// METHOD 10: keyof typeof — type-safe member names
// ============================================================
type StatusKey = keyof typeof Status;   // "Pending" | "Active" | "Completed" | "Cancelled" | 0 | 1 | 2 | 3
type StatusName = Exclude<StatusKey, number>;  // "Pending" | "Active" | "Completed" | "Cancelled"

function getStatusByName(name: StatusName): Status {
    return Status[name];
}

const pending = getStatusByName("Pending");  // 0

// ============================================================
// METHOD 11: Helper — reusable functions to read enums cleanly
// ============================================================
function getEnumKeys<T extends object>(enumObj: T): (keyof T)[] {
    return Object.keys(enumObj).filter((k) => isNaN(Number(k))) as (keyof T)[];
}

function getEnumValues<T extends object>(enumObj: T): number[] {
    return Object.values(enumObj).filter((v) => typeof v === "number") as number[];
}

function getEnumName<T extends Record<string, string | number>>(
    enumObj: T,
    value: number
): string | undefined {
    return enumObj[value] as string | undefined;
}

const keys = getEnumKeys(Status);           // ["Pending", "Active", "Completed", "Cancelled"]
const values = getEnumValues(Priority);       // [1, 2, 3, 10]
const label = getEnumName(Status, 1);         // "Active"

// ============================================================
// Practical usage example
// ============================================================
function printStatus(value: Status): void {
    const name = Status[value];  // reverse lookup
    console.log(`Status: ${name} (${value})`);
}

printStatus(Status.Active);       // "Status: Active (1)"
printStatus(currentStatus);       // "Status: Active (1)"

// Export for use in other files
export {
    Status,
    Priority,
    Direction,
    currentStatus,
    currentPriority,
    facing,
    statusName,
    priorityName,
    directionName,
    statusFromKey,
    statusFromNumber,
    isStatusValue,
    statusNamesOnly,
    statusNumbersOnly,
    statusLabelsOnly,
    forwardEntries,
    statusOptions,
    getEnumKeys,
    getEnumValues,
    getEnumName,
    getStatusByName,
    printStatus,
};

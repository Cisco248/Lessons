// ============================================================
// BOOLEAN-LIKE ENUMS IN TYPESCRIPT
// ============================================================
// TypeScript enums only support number or string members.
// For boolean values, use a const object with `as const`
// (often called a "const enum object" pattern).

const FeatureFlag = {
    Enabled: true,
    Disabled: false,
} as const;

const Answer = {
    Yes: true,
    No: false,
} as const;

type FeatureFlag = typeof FeatureFlag[keyof typeof FeatureFlag];
type Answer = typeof Answer[keyof typeof Answer];

// ============================================================
// METHOD 1: Direct dot notation (name → boolean)
// ============================================================
const isOn: FeatureFlag = FeatureFlag.Enabled;     // true
const agreed: Answer = Answer.Yes;                 // true

// ============================================================
// METHOD 2: Bracket notation with variable key
// ============================================================
const flagKey: keyof typeof FeatureFlag = "Disabled";
const flagFromKey = FeatureFlag[flagKey];          // false

// ============================================================
// METHOD 3: Check if a value is valid
// ============================================================
function isFeatureFlag(value: boolean): value is FeatureFlag {
    return Object.values(FeatureFlag).includes(value as FeatureFlag);
}

const validFlag = isFeatureFlag(true);             // true

// ============================================================
// METHOD 4: Object.keys() — member names
// ============================================================
const flagKeys = Object.keys(FeatureFlag);
// ["Enabled", "Disabled"]

// ============================================================
// METHOD 5: Object.values() — boolean values
// ============================================================
const flagValues = Object.values(FeatureFlag);
// [true, false]

// ============================================================
// METHOD 6: Object.entries() — [name, boolean] pairs
// ============================================================
const flagEntries = Object.entries(FeatureFlag);
// [["Enabled", true], ["Disabled", false]]

// ============================================================
// METHOD 7: for...in loop
// ============================================================
for (const key in FeatureFlag) {
    console.log(`${key} = ${FeatureFlag[key as keyof typeof FeatureFlag]}`);
}

// ============================================================
// METHOD 8: Array methods
// ============================================================
const hasEnabled = flagValues.includes(FeatureFlag.Enabled);  // true

const toggleOptions = flagEntries.map(([label, value]) => ({
    label,
    value,
}));

// ============================================================
// METHOD 9: keyof typeof — type-safe names
// ============================================================
type FlagName = keyof typeof FeatureFlag;          // "Enabled" | "Disabled"

function getFlagByName(name: FlagName): FeatureFlag {
    return FeatureFlag[name];
}

const disabled = getFlagByName("Disabled");        // false

// ============================================================
// METHOD 10: Find name from boolean value
// ============================================================
function getFlagName(value: FeatureFlag): FlagName | undefined {
    return (Object.keys(FeatureFlag) as FlagName[]).find(
        (key) => FeatureFlag[key] === value
    );
}

const nameFromValue = getFlagName(true);           // "Enabled"

// ============================================================
// METHOD 11: Toggle helper (practical boolean enum use)
// ============================================================
function toggleFlag(current: FeatureFlag): FeatureFlag {
    return current === FeatureFlag.Enabled
        ? FeatureFlag.Disabled
        : FeatureFlag.Enabled;
}

const toggled = toggleFlag(isOn);                  // false

export {
    FeatureFlag,
    Answer,
    isOn,
    agreed,
    flagFromKey,
    isFeatureFlag,
    flagKeys,
    flagValues,
    flagEntries,
    toggleOptions,
    getFlagByName,
    getFlagName,
    toggleFlag,
    toggled,
};

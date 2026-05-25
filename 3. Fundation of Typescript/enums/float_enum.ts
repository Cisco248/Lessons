// ============================================================
// FLOAT ENUMS IN TYPESCRIPT
// ============================================================
// Native `enum` only accepts integer literals for numeric members.
// For decimal/float constants, use a const object with `as const`.

const TaxRate = {
    None: 0,
    Low: 0.05,
    Standard: 0.15,
    High: 0.25,
    Premium: 0.33,
} as const;

const Temperature = {
    Freezing: 0.0,
    Cool: 10.5,
    Warm: 22.5,
    Hot: 35.8,
    Boiling: 100.0,
} as const;

const Opacity = {
    Transparent: 0.0,
    Light: 0.25,
    Medium: 0.5,
    Heavy: 0.75,
    Opaque: 1.0,
} as const;

type TaxRate = typeof TaxRate[keyof typeof TaxRate];
type Temperature = typeof Temperature[keyof typeof Temperature];
type Opacity = typeof Opacity[keyof typeof Opacity];

// ============================================================
// METHOD 1: Direct dot notation (name → float)
// ============================================================
const rate: TaxRate = TaxRate.Standard;            // 0.15
const temp: Temperature = Temperature.Warm;        // 22.5
const alpha: Opacity = Opacity.Medium;             // 0.5

// ============================================================
// METHOD 2: Bracket notation with variable key
// ============================================================
const rateKey: keyof typeof TaxRate = "High";
const rateFromKey = TaxRate[rateKey];              // 0.25

// ============================================================
// METHOD 3: Arithmetic with float enum values
// ============================================================
const price = 100;
const totalWithTax = price * (1 + TaxRate.Standard); // 115

const celsiusToDisplay = Temperature.Warm + 0.5;   // 23.0

// ============================================================
// METHOD 4: Object.keys() / values() / entries()
// ============================================================
const rateKeys = Object.keys(TaxRate);
const rateValues = Object.values(TaxRate);
// [0, 0.05, 0.15, 0.25, 0.33]

const rateEntries = Object.entries(TaxRate);

// ============================================================
// METHOD 5: for...in loop
// ============================================================
for (const key in TaxRate) {
    console.log(`${key}: ${(TaxRate[key as keyof typeof TaxRate] * 100).toFixed(1)}%`);
}

// ============================================================
// METHOD 6: Array methods — find, filter, reduce
// ============================================================
const highRates = rateValues.filter((v) => v >= 0.2);
// [0.25, 0.33]

const maxRate = rateValues.reduce((max, v) => (v > max ? v : max), 0);
// 0.33

const found = rateValues.find((v) => v === TaxRate.Low);  // 0.05

// ============================================================
// METHOD 7: Check if value exists (with float tolerance)
// ============================================================
function isFloatEnumValue<T extends Record<string, number>>(
    enumObj: T,
    value: number,
    epsilon = 0.0001
): boolean {
    return Object.values(enumObj).some(
        (v) => Math.abs(v - value) < epsilon
    );
}

const isValidRate = isFloatEnumValue(TaxRate, 0.15);   // true

// ============================================================
// METHOD 8: keyof typeof — type-safe names
// ============================================================
type RateName = keyof typeof TaxRate;

function getRateByName(name: RateName): TaxRate {
    return TaxRate[name];
}

const premium = getRateByName("Premium");            // 0.33

// ============================================================
// METHOD 9: Find closest float enum value
// ============================================================
function getClosestRate(value: number): TaxRate {
    return rateValues.reduce((closest, current) =>
        Math.abs(current - value) < Math.abs(closest - value)
            ? current
            : closest
    );
}

const closest = getClosestRate(0.12);                // 0.15 (Standard)

// ============================================================
// METHOD 10: Format float enum for display
// ============================================================
function formatRate(value: TaxRate): string {
    return `${(value * 100).toFixed(1)}%`;
}

const formatted = formatRate(TaxRate.High);          // "25.0%"

// ============================================================
// METHOD 11: Find member name from float value
// ============================================================
function getRateName(value: TaxRate): RateName | undefined {
    return (Object.keys(TaxRate) as RateName[]).find(
        (key) => TaxRate[key] === value
    );
}

const nameFromValue = getRateName(0.05);             // "Low"

export {
    TaxRate,
    Temperature,
    Opacity,
    rate,
    temp,
    alpha,
    rateFromKey,
    totalWithTax,
    rateKeys,
    rateValues,
    rateEntries,
    highRates,
    maxRate,
    isFloatEnumValue,
    getRateByName,
    getClosestRate,
    formatRate,
    getRateName,
    formatted,
    nameFromValue,
};

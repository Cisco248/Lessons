// ============================================================
// COMBINING OBJECT TYPES (INTERSECTION)
// ============================================================

type HasName = { name: string };
type HasAge = { age: number };
type Person = HasName & HasAge;

const person: Person = {
    name: "Lahiru",
    age: 25,
};

// Spread to merge runtime objects
const defaults = { theme: "dark", lang: "en" };
const userPrefs = { lang: "si" };
const settings = { ...defaults, ...userPrefs };

export { HasName, HasAge, Person, person, settings };

// ============================================================
// INTERSECTION TYPES (&)
// ============================================================

type HasName = { name: string };
type HasAge = { age: number };
type Person = HasName & HasAge;

const person: Person = {
    name: "Lahiru",
    age: 25,
};

type WithDates = {
    createdAt: Date;
    updatedAt: Date;
};

type FullRecord = HasName & HasAge & WithDates;

const record: FullRecord = {
    name: "Alex",
    age: 30,
    createdAt: new Date(),
    updatedAt: new Date(),
};

export { HasName, HasAge, Person, person, FullRecord, record };

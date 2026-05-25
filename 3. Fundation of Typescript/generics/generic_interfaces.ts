// ============================================================
// GENERICS WITH INTERFACES
// ============================================================

interface Identifiable {
    id: number;
}

interface Named {
    name: string;
}

// T must have at least the shape of Identifiable
function printId<T extends Identifiable>(item: T): number {
    return item.id;
}

// Build object from interface fields
function createRecord<T extends Named>(
    param_1: string,
    param_2: number,
    param_3: boolean
): Named & { param_2: number; param_3: boolean } {
    return {
        name: param_1,
        param_2,
        param_3,
    };
}

// Multiple interface constraint (intersection)
function describe<T extends Identifiable & Named>(item: T): string {
    return `${item.name} (id: ${item.id})`;
}

const user = { id: 1, name: "Lahiru" };
const id = printId(user);
const record = createRecord("Alex", 25, true);
const desc = describe(user);

export { printId, createRecord, describe, user, id, record, desc };

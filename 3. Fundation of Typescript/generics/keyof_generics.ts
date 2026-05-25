// ============================================================
// KEYOF WITH GENERICS
// ============================================================

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

function setValue<T, K extends keyof T>(obj: T, key: K, value: T[K]): T {
    return { ...obj, [key]: value };
}

function pickKeys<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
    const result = {} as Pick<T, K>;
    keys.forEach((key) => {
        result[key] = obj[key];
    });
    return result;
}

const product = { id: 1, name: "Laptop", price: 999 };

const name = getValue(product, "name");
const updated = setValue(product, "price", 899);
const picked = pickKeys(product, ["id", "name"]);

export { getValue, setValue, pickKeys, product, name, updated, picked };

// ============================================================
// FUNCTION RETURN TYPE: never
// ============================================================
// never = function never returns normally (throws or infinite loop)

function returnNever(): never {
    throw new Error("This never returns");
}

function throwError(errmsg: string): never {
    throw new Error(errmsg);
}

function infiniteLoop(): never {
    while (true) {
        // never exits
    }
}

// Use in exhaustive checks
type Shape = "circle" | "square";

function assertNever(value: never): never {
    throw new Error(`Unexpected value: ${value}`);
}

function getArea(shape: Shape): number {
    switch (shape) {
        case "circle":
            return Math.PI;
        case "square":
            return 1;
        default:
            return assertNever(shape);
    }
}

export { returnNever, throwError, assertNever, getArea };

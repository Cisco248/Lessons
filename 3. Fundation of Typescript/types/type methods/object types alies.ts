// ============================================================
// OBJECT TYPE ALIASES
// ============================================================

type Point = {
    x: number;
    y: number;
};

type Circle = {
    center: Point;
    radius: number;
};

const circle: Circle = {
    center: { x: 0, y: 0 },
    radius: 10,
};

type StringMap = {
    [key: string]: string;
};

const labels: StringMap = {
    submit: "Submit",
    cancel: "Cancel",
};

export { Point, Circle, circle, StringMap, labels };

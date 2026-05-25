// ============================================================
// READONLY TUPLES
// ============================================================

const point: readonly [number, number] = [10, 20];

// point[0] = 5;  // Error: index signature is readonly

function printPoint(p: readonly [number, number]): void {
    console.log(`(${p[0]}, ${p[1]})`);
}

printPoint(point);

type ReadonlyRGB = readonly [number, number, number];
const white: ReadonlyRGB = [255, 255, 255];

export { point, printPoint, white };

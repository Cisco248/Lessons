// ============================================================
// CALLBACK FUNCTIONS
// ============================================================

type Callback = (message: string) => void;

function processUser(name: string, onSuccess: Callback, onError: Callback): void {
    if (name.length > 0) {
        onSuccess(`Welcome, ${name}`);
    } else {
        onError("Name is required");
    }
}

function mapNumbers(nums: number[], fn: (n: number) => number): number[] {
    return nums.map(fn);
}

function filterItems<T>(items: T[], predicate: (item: T) => boolean): T[] {
    return items.filter(predicate);
}

processUser("Lahiru", console.log, console.error);

const doubled = mapNumbers([1, 2, 3], (n) => n * 2);
const adults = filterItems([15, 22, 30], (age) => age >= 18);

export { processUser, mapNumbers, filterItems, doubled, adults };

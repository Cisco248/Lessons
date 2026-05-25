// ============================================================
// GENERIC CLASSES
// ============================================================

class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }

    setValue(value: T): void {
        this.value = value;
    }
}

class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }
}

class Pair<T, U> {
    constructor(
        public first: T,
        public second: U
    ) {}

    swap(): Pair<U, T> {
        return new Pair(this.second, this.first);
    }
}

const numberBox = new Box(42);
const stringBox = new Box("hello");

const stack = new Stack<number>();
stack.push(1);
stack.push(2);

const pair = new Pair("age", 25);
const swapped = pair.swap();

export { Box, Stack, Pair, numberBox, stringBox, stack, pair, swapped };

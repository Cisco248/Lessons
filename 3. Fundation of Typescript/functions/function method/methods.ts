// ============================================================
// FUNCTION METHODS ON OBJECTS & INTERFACES
// ============================================================

interface Course {
    name: string;
    price: number;
    getSummary(): string;
    applyDiscount(percent: number): number;
}

function createCourse(name: string, price: number): Course {
    return {
        name,
        price,

        getSummary() {
            return `${this.name} — $${this.price}`;
        },

        applyDiscount(percent: number) {
            return this.price * (1 - percent / 100);
        },
    };
}

const course = createCourse("TypeScript 101", 49.99);
const summary = course.getSummary();
const salePrice = course.applyDiscount(20);

// Method shorthand in object literal
const calculator = {
    value: 0,
    add(n: number) {
        this.value += n;
        return this;
    },
    reset() {
        this.value = 0;
    },
};

calculator.add(5).add(3);
console.log(summary, salePrice, calculator.value);

export { createCourse, course, calculator, summary, salePrice };

// ============================================================
// OBJECTS WITH METHODS (FUNCTION PROPERTIES)
// ============================================================

const calculator = {
    value: 0,
    add(n: number) {
        this.value += n;
        return this;
    },
    subtract(n: number) {
        this.value -= n;
        return this;
    },
    getResult() {
        return this.value;
    },
};

calculator.add(10).add(5).subtract(3);
const result = calculator.getResult();

export { calculator, result };

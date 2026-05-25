// ============================================================
// ARROW FUNCTIONS vs REGULAR — `this` BINDING
// ============================================================
// Arrow functions do NOT have their own `this`.
// They inherit `this` from the surrounding scope.

const counter = {
    count: 0,

    // Regular function — `this` refers to the object
    incrementRegular: function () {
        this.count++;
        return this.count;
    },

    // Arrow function as method — `this` is NOT the object (avoid!)
    incrementArrow: () => {
        // `this` here is outer scope (e.g. module/global), not counter
        // this.count++; // Would error or behave unexpectedly
        return 0;
    },

    // Correct: arrow inside regular function preserves outer `this`
    startTimer: function () {
        setTimeout(() => {
            this.count += 1;
            console.log("Timer tick:", this.count);
        }, 100);
    },
};

counter.incrementRegular();  // 1
counter.incrementRegular();  // 2

export { counter };

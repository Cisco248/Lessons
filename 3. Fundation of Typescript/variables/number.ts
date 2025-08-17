let age: number = 25;               // Declare a number variable

// --- Number Methods ---

// 1. toFixed() Formats a number using fixed-point notation (returns a string)
let fixedAge = age.toFixed(2);      // "25.00"


// 2. toString() Converts a number to a string
let ageStr = age.toString();        // "25"


// 3. toPrecision() Formats number to specified length (string)
let precise = age.toPrecision(3);   // "25.0"


// 4. valueOf() Returns the primitive value of the number (usually same as original)
let val = age.valueOf();            // 25


// 5. isInteger() static method of Number
let isInt = Number.isInteger(age); // true


// 6. isNaN() static method to check Not-a-Number
let notNum = Number.isNaN(Number("abc"));  // true


// --- Arithmetic example ---
let height: number = 175.5;

height.toFixed(1)     // 175.5

height.toString()     // "175.5"

Number.isInteger(height); // false

// Export variables (optional)
export {
    age,
    fixedAge,
    ageStr,
    precise,
    val,
    isInt,
    notNum,
    height
};

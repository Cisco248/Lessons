// --- Boolean Variables ---
let isStudent: boolean = true;
let isAdmin: boolean = false;

// --- Comparison Operators (return boolean) ---
let a = 10;
let b = 20;

let result1: boolean = a < b;   // true
let result2: boolean = a === b; // false
let result3: boolean = a !== b; // true

// --- Logical Operators (boolean logic) ---
let loggedIn = true;
let isAdminUser = false;

let canAccess = loggedIn && isAdminUser;  // false (AND)
let canView = loggedIn || isAdminUser;    // true  (OR)
let isGuest = !loggedIn;                   // false (NOT)

// --- Boolean in Conditions ---
let isAvailable: boolean = true;

if (isAvailable) {
  console.log("Item is available");
} else {
  console.log("Out of stock");
}

// --- Function returning boolean ---
function isEven(num: number): boolean {
  return num % 2 === 0;
}

console.log(isEven(10)); // true
console.log(isEven(7));  // false

// --- Toggle boolean value ---
let isDarkMode: boolean = false;

isDarkMode = !isDarkMode; // true
isDarkMode = !isDarkMode; // false

// --- Avoid Using Boolean Object Wrapper ---
let boolObj = new Boolean(false);
if (boolObj) {
  // This prints because objects are truthy, even if Boolean(false)
  console.log("This prints because object is truthy!");
}

// --- Explicit boolean conversion ---
let value = "";
let boolVal: boolean = Boolean(value);  // false

let num = 1;
let boolNum = Boolean(num);             // true

// --- Static Boolean Methods ---
// Note: Boolean object only has 2 static methods (inherited from Object):
// But useful static methods related to booleans come from the global Boolean function:

console.log(Boolean(""));     // false
console.log(Boolean("text")); // true
console.log(Boolean(0));      // false
console.log(Boolean(42));     // true

// --- Export variables and functions ---
export {
  isStudent,
  isAdmin,
  canAccess,
  canView,
  isGuest,
  isAvailable,
  isDarkMode,
  boolVal,
  boolNum,
};

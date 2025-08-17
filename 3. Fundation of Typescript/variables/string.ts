// Variable Declaration
let name: string = "Lahiru Dilshan";


// 1. toLowerCase()
let lower = name.toLowerCase(); // lahiru dilshan


// 2. toUpperCase()
let upper = name.toUpperCase(); // LAHIRU DILSHAN


// 3. charAt()
let firstChar = name.charAt(0); // L


// 4. charCodeAt()
let charCode = name.charCodeAt(0);  // 76


// 5. concat()
let fullName = name.concat(" - Student");   // Lahiru Dilshan - Student


// 6. includes()
let hasDil = name.includes("Dil");  // true


// 7. indexOf()
let index = name.indexOf("a");  // 2


// 8. lastIndexOf()
let lastIndex = name.lastIndexOf("a");  // 13


// 9. replace()
let replaced = name.replace("Dilshan", "Fernando"); // Lahiru Fernando


// 10. slice()
let sliced = name.slice(0, 6);  // Lahiru


// 11. split()
let words = name.split(" ");    // ["Lahiru", "Dilshan"]


// 12. substring()
let sub = name.substring(7, 14);    // Dilshan


// 13. trim()
let extraSpaces = "   Hello TypeScript   ";
let trimmed = extraSpaces.trim();   // Hello TypeScript


// 14. startsWith()
let starts = name.startsWith("Lah");    // true


// 15. endsWith()
let ends = name.endsWith("shan");   // true


export {
    name,
    lower,
    upper,
    firstChar,
    charCode,
    fullName,
    hasDil,
    index,
    lastIndex,
    replaced,
    sliced,
    words,
    sub,
    trimmed,
    starts,
    ends
};

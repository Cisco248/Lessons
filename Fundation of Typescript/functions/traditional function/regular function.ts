// Declare a variable 'hero' (any type)
let hero: any;

/**
 * Returns the name of a hero
 * @returns A string "thor"
 */
function getHero() {
    return "thor";
}

// Assign the function reference to 'hero'
hero = getHero;

// Print the function reference (not executed)
console.log(hero);



// Function that adds 2 to a given number
function addTwo(num) {
    return num + 2;
}

// Call addTwo and print result
console.log(addTwo(5));

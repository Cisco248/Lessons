/**
 * Accepts a user object with 'name' (string) and 'isPaid' (boolean).
 * The function doesn't return anything (void by default).
 *
 * @param param0 - Object with 'name' and 'isPaid' properties
 */
function Function_One({ name: string, isPaid: boolean }) {}

// A new user object with additional 'email' property
let Object_One = {
    name: "name",
    isPaid: false,
    email: "name@dev.com"
};

// Call createUser with the newUser object
Function_One(Object_One);

/**
 * Accepts a user object with 'name' (string) and 'isPaid' (boolean).
 * The function does not return anything (void).
 *
 * @param param0 - Object containing 'name' and 'isPaid' properties
 */
function Function_Two({ name, isPaid }: { name: string; isPaid: boolean }){
    console.log(`${name}, ${isPaid}`);
}

// A new user object with additional 'email' property
let Object_two = {
    name: "name",
    isPaid: false,
    email: "name@dev.com"
};

// Call createUser with the newUser object
Function_Two(Object_two);

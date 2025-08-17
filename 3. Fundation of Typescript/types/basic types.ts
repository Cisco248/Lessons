// Define a custom type with three properties
type Type_One = {
    param_1: string,   // A string property
    param_2: number,   // A number property
    param_3: boolean   // A boolean property
}

/**
 * Accepts an object of type 'Type_One' and returns it.
 *
 * @param type - An object matching the Type_One structure
 * @returns The same object passed to the function
 */
function Function_One(type: Type_One) {
    return type;
}

// Call Function_One using an inline object that matches Type_One
Function_One({
    param_1: "string",
    param_2: 1,
    param_3: true
});

// Declare a variable of type Type_One
let Variable_One: Type_One = {
    param_1: 'string',
    param_2: 1,
    param_3: true
};

// Update the properties of the object
Variable_One.param_1 = 'new string';  // Change string value
Variable_One.param_2 = 2;             // Change number value
Variable_One.param_3 = false;         // Change boolean value

// Mark the file as a module
export {};

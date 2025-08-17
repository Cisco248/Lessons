// Define an interface with multiple typed properties and functions
interface Interface_One {
    param_1: string;                   // A required string
    param_2: number;                   // A required number
    param_3: boolean;                  // A required boolean
    param_4?: () => string;           // An optional method that returns a string
    param_5(param_1: string): string; // A required method that takes a string and returns a string
}

// Use the interface in a variable
const Variable_One: Interface_One = {
    param_1: "string",                 // Assign a string
    param_2: 1,                        // Assign a number
    param_3: true,                     // Assign a boolean
    param_5: (param_1: 'string') => {  // Implement the param_5 function
        return param_1;
    }
    // param_4 is optional, so it's not required here
};

// Extend Interface_One to create Interface_Two (inherit all properties)
interface Interface_Two extends Interface_One {
    param_6: string;   // New required string property
    param_7: number;   // New required number property
}

// Create an object using Interface_Two
const Variable_Two: Interface_Two = {
    param_1: "string",
    param_2: 1,
    param_3: true,
    param_5: (param_1: 'string') => {
        return param_1;
    },
    param_6: 'string',
    param_7: 2
    // param_4 still optional, so it's okay to omit
};

export {};

// Define a type with a readonly and optional property
type Type_One = {
    param_1?: string;  // Optional and readonly string
    param_2: number;             // Editable number
    param_3: boolean;            // Editable boolean
}

type Type_Two = (param_4: string) => string

/**
 * Accepts an object of Type_One and returns it.
 *
 * @param type - An object matching the Type_One structure
 * @returns The same object
 */
function Function_One(type: Type_One) {
    return type;
}

function Function_Two(type: Type_Two) {
    return type
}

// Function call using inline object
Function_One({
    param_1: 'string',
    param_2: 1,
    param_3: true
});

Function_Two((param_4: string) => {
    return `string: ${param_4}`
})

export {}
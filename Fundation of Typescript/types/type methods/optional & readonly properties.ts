// Define a type with a readonly and optional property
type Type_One = {
    readonly _param_1: string;  // Optional and readonly string
    param_2: number;             // Editable number
    param_3: boolean;            // Editable boolean
}

const Variable_One: Type_One = {
    _param_1: 'readonly string',
    param_2: 2,
    param_3: true
}

// ❌ Invalid update: _param_1 is readonly and cannot be modified
Variable_One._param_1 = 'new string';

export {};

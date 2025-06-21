type Type_One = {
  param_1: string;
  param_2: number;
  param_3: boolean;
};

let Variable_One: Type_One = {
    param_1: 'string',
    param_2: 1,
    param_3: true
}

// ✅ Valid updates to editable fields
Variable_One.param_1 = 'new string';
Variable_One.param_2 = 2;
Variable_One.param_3 = false;
type Type_One = {
  param_1: string;
  param_2: string[];
};

type Type_Two = {
  param_3?: string;
  param_4: Date;
};

type Type_Three = Type_One & Type_Two;

let Variable_One: Type_Three = {
  param_1: "string",
  param_2: ["string_array"],
  param_3: 'string',
  param_4: new Date()
};

export {}

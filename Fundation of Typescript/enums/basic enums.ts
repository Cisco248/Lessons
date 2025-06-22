enum Enum_One {
    param_1,
    param_2,
    param_3
}

const Variable_Enum_One: Enum_One = Enum_One.param_1
const Variable_Enum_Two: Enum_One = Enum_One.param_2
const Variable_Enum_Three: Enum_One = Enum_One.param_3

console.log(Variable_Enum_One, Variable_Enum_Two, Variable_Enum_Three)

enum Enum_Two {
    param_1 = 1,
    param_2 = 2,
    param_3 = 3
}

const VET_1: Enum_Two = Enum_Two.param_1
const VET_2: Enum_Two = Enum_Two.param_2
const VET_3: Enum_Two = Enum_Two.param_3

console.log(VET_1, VET_2, VET_3);

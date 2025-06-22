/**
 * 🔹 What is Array<type> in TypeScript?
 *
 * In TypeScript, Array<type> is a generic way to declare an array.
 * It means: "an array that contains values of type type."
 *
 * */

// ✅ Examples

const Array_One = [1, 2, 3];
const Array_Two: Array<any> = ['string', 1, true];

const Array_Number_One: number[] = [1, 2, 3];
const Array_String_One: string[] = ['string', 'string']
const Array_Boolean_One: boolean[] = [true, false]
const Array_Mix_One: (string | number | boolean)[] = ['string', 1, true];

const Array_Number_Two: number[][] = [[1, 2, 3], [4, 5, 6]]
const Array_String_Two: string[][] = [['string', 'string'], ['string', 'string']]
const Array_Boolean_Two: boolean[][] = [[true, false], [true, false]]
const Array_Mix_Two: (string | number | boolean)[][] = [['string', 1, true], ['string', 1, true]]


export {}
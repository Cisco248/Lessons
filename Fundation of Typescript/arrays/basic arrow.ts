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

const Array_Number: number[] = [1, 2, 3];
const Array_String: string[] = ['string', 'string']
const Array_Boolean: boolean[] = [true, false]
const Array_Mix: (string | number | boolean)[] = ['string', 1, true];

export {}
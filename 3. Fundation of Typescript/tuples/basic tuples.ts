/**
 * 📘 What is a Tuple in TypeScript?
 *
 * A tuple is a fixed-length, ordered array where each element has a specific type.
 * Unlike regular arrays (number[]), where all items are the same type, tuples allow different types in fixed positions.
 */

// A tuple with exactly three numbers
let Tuple_One: [ number, number, number ]
Tuple_One = [ 1, 2, 3 ]

// Declare and initialize at once
let Tuple_Two: [number, number, number] = [ 4, 5, 6 ]

// Custom type alias for a tuple with two numbers
type Tuple_Type_One = [ number, number ]
const Variable_One: Tuple_Type_One = [ 7, 8 ]

// Tuple of two strings
type Tuple_Type_Two = [ string, string ]
const Variable_Two: Tuple_Type_Two = [ 'string', 'string' ]

// Tuple with a number followed by a string
type Tuple_Type_Three = [ number, string ]
const Variable_Three: Tuple_Type_Three = [ 1, 'string' ]
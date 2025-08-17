const String_Array: string[] = ['string_1', 'string_2', 'string_3'];

// 1. .push() – Add to end
String_Array.push('string_4');


// 2. .pop() – Remove from end
String_Array.pop();  // removes 'string_4'


// 3. .shift() – Remove from beginning
String_Array.shift();  // removes 'string_1'


// 4. .unshift() – Add to beginning
String_Array.unshift('new_string');  // adds at index 0


// 5. .forEach() – Loop through each item
String_Array.forEach((item) => {
    console.log(item);  // prints each string
});


// 6. .map() – Create a new array by transforming items
const upperCaseArray = String_Array.map((item) => item.toUpperCase());


// 7. .filter() – Filter items based on a condition
const filtered = String_Array.filter((item) => item.includes('2'));


// 8. .find() – Find the first matching element
const result = String_Array.find((item) => item === 'string_2');


// 9. .includes() – Check if a value exists
const hasValue = String_Array.includes('string_1');


// 10. .indexOf() – Get index of an item
const index = String_Array.indexOf('string_3');


// 11. .join() – Join array into string
const joined = String_Array.join(', ');


// 13. .splice() – Remove or insert elements
String_Array.splice(1, 1);  // removes 1 item at index 1


// 14. .reverse() – Reverse array
String_Array.reverse();


// 15. .sort() – Sort array
String_Array.sort();  // sorts alphabetically


// 16. .reduce() – Accumulate values
const totalLength = String_Array.reduce((acc, item) => acc + item.length, 0);

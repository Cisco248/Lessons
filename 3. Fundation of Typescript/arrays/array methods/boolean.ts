const Boolean_Array: boolean[] = [true, false, true];

// 1. .push() – Add to end
Boolean_Array.push(false);  // [true, false, true, false]

// 2. .pop() – Remove from end
Boolean_Array.pop();  // [true, false, true]

// 3. .shift() – Remove from beginning
Boolean_Array.shift();  // [false, true]

// 4. .unshift() – Add to beginning
Boolean_Array.unshift(true);  // [true, false, true]

// 5. .forEach() – Loop through each value
Boolean_Array.forEach((val) => {
    console.log(val);  // true, false, true
});

// 6. .map() – Flip booleans
const flipped = Boolean_Array.map((val) => !val);  // [false, true, false]

// 7. .filter() – Keep only true values
const onlyTrue = Boolean_Array.filter((val) => val === true);  // [true, true]

// 8. .find() – Find the first true
const foundTrue = Boolean_Array.find((val) => val === true);  // true

// 9. .includes() – Check if true exists
const hasTrue = Boolean_Array.includes(true);  // true

// 10. .indexOf() – Get index of false
const indexFalse = Boolean_Array.indexOf(false);  // 1

// 11. .join() – Join as string
const boolJoined = Boolean_Array.join('-');  // "true-false-true"

// 12. .slice() – Get a slice
const slicedBools = Boolean_Array.slice(1);  // [false, true]

// 13. .splice() – Remove index 1
Boolean_Array.splice(1, 1);  // [true, true]

// 14. .reverse() – Reverse array
Boolean_Array.reverse();  // [true, true]

// 15. .sort() – Sort booleans (false < true)
Boolean_Array.sort();  // [false, true]

// 16. .reduce() – Count true values
const countTrue = Boolean_Array.reduce((acc, val) => val ? acc + 1 : acc, 0);  // 2

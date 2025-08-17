const Number_Array: number[] = [10, 20, 30];

// 1. .push() – Add to end
Number_Array.push(40);  // [10, 20, 30, 40]

// 2. .pop() – Remove from end
Number_Array.pop();  // [10, 20, 30]

// 3. .shift() – Remove from beginning
Number_Array.shift();  // [20, 30]

// 4. .unshift() – Add to beginning
Number_Array.unshift(5);  // [5, 20, 30]

// 5. .forEach() – Loop through each number
Number_Array.forEach((num) => {
    console.log(num);  // prints each number
});

// 6. .map() – Create a new array of doubled numbers
const doubled = Number_Array.map((num) => num * 2);  // [10, 40, 60]

// 7. .filter() – Filter numbers greater than 20
const greaterThan20 = Number_Array.filter((num) => num > 20);  // [30]

// 8. .find() – Find the first number equal to 20
const found = Number_Array.find((num) => num === 20);  // 20

// 9. .includes() – Check if 30 exists
const has30 = Number_Array.includes(30);  // true

// 10. .indexOf() – Get index of 20
const indexNum = Number_Array.indexOf(20);  // 1

// 11. .join() – Join numbers into a string
const numJoined = Number_Array.join(',');  // "5,20,30"

// 12. .slice() – Extract part of the array
const slicedNums = Number_Array.slice(0, 2);  // [5, 20]

// 13. .splice() – Remove item at index 1
Number_Array.splice(1, 1);  // [5, 30]

// 14. .reverse() – Reverse the array
Number_Array.reverse();  // [30, 5]

// 15. .sort() – Sort ascending
Number_Array.sort((a, b) => a - b);  // [5, 30]

// 16. .reduce() – Sum of all numbers
const totalSum = Number_Array.reduce((acc, num) => acc + num, 0);  // 35

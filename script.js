//Array & Array Methods
let fruits = ['Apple', 'Banana', 'Mango'];

//Array Methods

//1. Push() and Pop() : Add and Remove from the end of an array
fruits.push('Orange');
fruits.pop();

//2. Unshift() and Shift() : Add and Remove from the beginning of an array
fruits.unshift('Strawberry');
fruits.shift();

//3. Splice() : Add and Remove from a specific index of an array
fruits.splice(1, 0, 'Grapes');
console.log(fruits); // ['Apple', 'Grapes', 'Banana', 'Mango']

//4. Slice() : Extract a portion of an array
let citrus = fruits.slice(1, 3);
console.log(citrus); // ['Banana', 'Mango']

//MAP Reduce Filter 
let numbers = [1, 2, 3, 4, 5];
//Map
let squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9, 16, 25]
//Filter
let even = numbers.filter(num => num % 2 === 0);
console.log(even);
//Reduce
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

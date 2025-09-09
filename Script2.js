//Objects
let person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

let keys = Object.keys(person);
console.log(keys); // ['name', 'age', 'city']
let values = Object.values(person);
console.log(values); // ['John', 30, 'New York']

//Syntax to loop through an object
//for...in loop

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

//JSON - JavaScript Object Notation
let  detail = '{"name": "Alice", "age": 25, "city": "Los Angeles"}';
let obj = JSON.parse(detail);
console.log(obj.name); // Alice
// 1. Define 2 functions
// 1st function named as checkEven which will check if the num passed is even or not.
// 2nd function named as filterEvens which will take an array of numbers and the checkEven function as arguments.
// This filterEvens function will filter out  only even numbers using the checkEven function and generate a new array of the even numbers.

//COMPLETE YOUR CODE HERE 
function checkEven(num) {
    return num % 2 === 0;
}

function filterEvens(arr, checkEven) {
    return arr.filter(checkEven);
}

var numbers = [1, 2, 3, 4, 5, 6];
var evenNumbers = filterEvens(numbers, checkEven);
console.log(evenNumbers); 

//2. Write an IIFE that calculates the factorial of a given number and immediately logs the result to the console.

//COMPLETE YOUR CODE HERE 
(function(num) {
    function factorial(n) {
        return (n === 0) ? 1 : n * factorial(n - 1);
    }
    console.log(factorial(num));
})(5);

//3. The product1 object (which is already given) consists of title, price and category information of Nike Shoes.
// The description() function describes the product using its properties.
// Your task is to create a product2 object which consists of the title, price and category information of Sony TV.
// Next, use the call() method to invoke the description() method of product1 on product2.
// This should display the details of product2 on the console. 
var product1 = {
    title: "Nike Shoes",
    price: 30,
    category: "Shoes",
    description: function (){
        return "Title: " + this.title + " Price: " + this.price + " Category: " + this.category;
    }
}
//COMPLETE YOUR CODE HERE 
var product2 = {
    title: "Sony TV",
    price: 300,
    category: "Electronics"
}

console.log(product1.description.call(product2)); 


//4. Given an array of person objects, define a function to find oldest person object.

persons = [{"name" : "Harry", "age" : 12}, {"name" : "Ron", "age" : 11}, {"name" : "Hermione", "age" : 13}]
//COMPLETE YOUR CODE HERE 
var persons = [{"name" : "Harry", "age" : 12}, {"name" : "Ron", "age" : 11}, {"name" : "Hermione", "age" : 13}];

function findOldest(persons) {
    return persons.reduce((oldest, person) => {
        return (person.age > oldest.age) ? person : oldest;
    }, persons[0]);
}

console.log(findOldest(persons));


//5.  Create a function that calculates the sum of an array using IIFE function and returns it.

//COMPLETE YOUR CODE HERE 
var sum = (function(arr) {
    return arr.reduce((total, num) => total + num, 0);
})([1, 2, 3, 4, 5]);

console.log(sum);

//6. Write a function printContext that, when invoked, logs the this keyword to the console. Then, demonstrate how the context of a function can change when calling it with different objects using the call method.

//COMPLETE YOUR CODE HERE
function printContext() {
    console.log(this);
}

var obj1 = { name: "Object 1" };
var obj2 = { name: "Object 2" };

printContext.call(obj1);
printContext.call(obj2);

//7. Create a function multiply that takes two parameters and returns their product. Use the bind method to create a new function "double" that multiplies a single parameter by 2.

//COMPLETE YOUR CODE HERE 
function multiply(a, b) {
    return a * b;
}

var double = multiply.bind(null, 2);
console.log(double(5));

// 8. Create an object person with properties name and age. Write a function "introduce" that logs a message introducing the person. Then, use the call method to invoke the introduce function with the person object as the context.

//COMPLETE YOUR CODE HERE 
var person = {
    name: "John",
    age: 30
}

function introduce() {
    console.log("Hello, my name is "+this.name+" and I am "+this.age+" years old.");
}

introduce.call(person);

// 9. Write a higher order function createMultiplier that takes a factor as an argument and returns another functiom that multiplies a number by that factor. 

//COMPLETE YOUR CODE HERE 
function createMultiplier(factor) {
    return function(num) {
        return num * factor;
    }
}

var triple = createMultiplier(3);
console.log(triple(5));

// 10. Write a function called "calculate" that adds two numbers and assign a property "description" to it with a string describing what the function does. Then, access and log this property.

//COMPLETE YOUR CODE HERE 
function calculate(a, b) {
    return a + b;
}

calculate.description = "This function adds two numbers.";

console.log(calculate.description);
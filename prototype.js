// 2nd June [SUNDAY]
//  [[PROTOTYPE]]

/* 
When we create a function, it gets a 'prototype' property by default. 
This property  is used when creating instances with a 'new' keyword.
*/

function Person(name, age) {
  // This is a function constructor
  /* 
   In JavaScript, a function constructor is a function used to create objects. 
    When you use the new keyword with a function constructor, it creates a new object and 
    sets the this context to that new object, allowing you to define properties and methods for it. 
  */
  this.name = name;
  this.age = age;
}

// You can add methods to the Person prototype, which will be shared by all instances of Person:
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

/* This Person function is a constructor function. When called with the new keyword,
it creates a new Person object with name and age properties. */
const person = new Person("Dheeraj", 22);
console.log(person.greet()); // Hello, my name is Dheeraj
console.log(Person.prototype); // { greet: [Function] }

/*
How It Works
1. Function Constructor Definition: The function Person is defined with parameters name and age.
2. Instance Creation: Using the new keyword, a new object is created.
3. Setting Properties: The this keyword inside the constructor function refers to the new object, so this.name and this.age set properties on the new object.
4. Prototype Chain: Methods added to Person.prototype are available to all instances of Person.
*/

/*

Internal Steps
When you call new Person('Dheeraj', 22), the following steps occur:

Create a New Object: A new object is created.
Set Prototype: The new object’s internal [[Prototype]] property is set to Person.prototype.
Bind this: The Person constructor function is called with this bound to the new object.
Initialize Properties: Properties and methods defined inside the constructor function are added to the new object.
Return Object: The new object is returned
*/

function Person(name, age) {
  // Step 3: this = new Object()
  this.name = name; // Step 4: Add properties to this
  this.age = age;
  // Step 5: return this (implicitly)
}

const dheeraj = new Person("Dheeraj", 22); // Step 1 & 2: Create new object and set prototype
console.log(dheeraj); // { name: 'Dheeraj', age: 22 }

/*
    Prototype Chain
The prototype chain is a series of links between objects,
 established via their [[Prototype]] properties. 
 If a property or method isn't found on an object, 
 JavaScript looks up the chain until it finds it or reaches the end (null).
*/

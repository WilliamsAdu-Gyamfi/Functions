"use strict";

const flight = "AB123";
const williams = {
  name: "Williams Gyamfi",
  passport: 25364547,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "AB234"; //to check whether the flight could change
  passenger.name = "Mr." + passenger.name;

  if (passenger.passport === 25364547) {
    alert("Checked In");
  } else {
    alert("Wrong Details");
  }
};

//checkIn(flight, williams);
//console.log(flight);
//console.log(williams);

const flightNum = flight;
const passenger = williams;

// TWO FUNCTIONS MANUPULATING THE SAME OBJCT
//How interactions of different functions with the same object can create an issue
const newPassport = function (student) {
  student.passport = Math.trunc(Math.random() * 500);
};
//newPassport(williams);
//checkIn(flight, williams);

/*
//CALLBACK FUNCTION
const greetings = function () {
  console.log("🤝");
};
document.body.addEventListener("click", greetings);
["Williams", "Adu", "Gyamfi"].forEach(greetings);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const person = greet("Hi");
person("Williams");

//OR
greet("Hi")("Williams");
*/

// small challenge(writing the same function using only arrow fumction)
const greet = greeting => name => console.log(`${greeting} ${name}`);

const person = greet("Hi");
person("Williams");
person("Gyamfi");

const ghana = {
  airline: "Ghana Airline",
  code: "GH",
  booking: [],
  book: function (flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.code}${flightNum}`
    );
    this.booking.push({
      flight: `${name} booked a seat on ${this.airline} flight ${this.code}${flightNum}`,
    });
  },
};
ghana.book(123, "Williams");
console.log(ghana);

//let's asume we have a different a airline but we want to use the book function without hard-coding(DON'T repeat yourself principle)

const nigeria = {
  airline: "GhanaNigeer Airline",
  code: "GHA",
  booking: [],
};

const book = ghana.book; //This is the solution

book.call(nigeria, 45, "Patience"); // calling the function
console.log(nigeria);
book.call(ghana, 45, "Charles");
console.log(ghana);

const ghana3 = {
  airline: "Ghana3 Airline",
  code: "GH3",
  booking: [],
};
book.call(ghana3, 50, "John");
console.log(ghana3);

//Apply Method
const flightInfo = [90, "Johua"];
book.call(ghana3, ...flightInfo);

//BIND METHOD
//book.call(ghana3, 50, "John");
const newGhana3 = book.bind(ghana3);
newGhana3(90, "Albert");
const newNigeria = book.bind(nigeria);
newNigeria(10, "Joe");

const newGhana3A = book.bind(ghana3, 1000); //overwriting flightNum
newGhana3A("Joeseph");

ghana.planes = 100;
ghana.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", ghana.buyPlane.bind(ghana));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
console.log(addVAT(23));

//small challenge
/*
  const greet = function (greeting) {
    return function (name) {
      console.log(`${greeting} ${name}`);
    };
  };
  
  const person = greet("Hi");
  person("Williams");
  
  //OR
  greet("Hi")("Williams");
  */

//WITHOUT USING THE BIND METHOD(USING FUNCTIONS RETURNING FUNTIONS)
const addTax2 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTax.bind(0.23);

console.log(addVAT(100));
console.log(addVAT(23));

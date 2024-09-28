"use strict";

const flight = "AB123";
const williams = {
  name: "Williams Gyamfi",
  passport: 25364547,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "AB234"; //to check whether the flightNum could change
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

// small challenge(writing the same function using Arrow fumction)
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

/*
Coding Challenge #1 
Let's build a simple poll app! 
A poll has a question, an array of options from which people can choose, and an 
array with the number of replies for each option. This data is stored in the starter 
'poll' object below. 
Your tasks: 
1. Create a method called 'registerNewAnswer' on the 'poll' object. The 
method does 2 things: 
1.1. 
1.2. 
Display a prompt window for the user to input the number of the 
selected option. The prompt should look like this: 
What is your favourite programming language? 
0: JavaScript 
1: Python 
2: Rust 
3: C++ 
(Write option number) 
Based on the input number, update the 'answers' array property. For 
example, if the option is 3, increase the value at position 3 of the array by 
1. Make sure to check if the input is a number and if the number makes 
sense (e.g. answer 52 wouldn't make sense, right?) 
2. Call this method whenever the user clicks the "Answer poll" button. 
3. Create a method 'displayResults' which displays the poll results. The 
method takes a string as an input (called 'type'), which can be either 'string' 
or 'array'. If type is 'array', simply display the results array as it is, using 
console.log(). This should be the default option. If type is 'string', display a 
string like "Poll results are 13, 2, 4, 1".  
4. Run the 'displayResults' method at the end of each 
'registerNewAnswer' method call. 
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test 
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll 
object! So what should the this keyword look like in this situation? 
20 
The Complete JavaScript Course 
Test data for bonus:  
§ Data 1: [5, 2, 3] 
§ Data 2: [1, 5, 3, 9, 6, 1] 
Hints: Use many of the tools you learned about in this and the last section 
�
� 
GOOD LUCK 
�
�
 const poll = { 
question: "What is your favourite programming language?", 
options: ["0: JavaScript", "1: Python", "2: Rust", "3:  
C++"], 
// This generates [0, 0, 0, 0]. More in the next section! 
answers: new Array(4).fill(0), 
}; 
*/

/*
Test data for bonus:  
§ Data 1: [5, 2, 3] 
§ Data 2: [1, 5, 3, 9, 6, 1] 
*/

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  // Method to register a new answer
  registerNewAnswer() {
    // Display the prompt window to the user
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    console.log(answer);

    // Check if the input is a valid number and falls within the options range
    if (!isNaN(answer) && answer >= 0 && answer < this.answers.length) {
      this.answers[answer]++;
      this.displayResults();
      this.displayResults("string");
    } else {
      alert("Invalid input. Please enter a valid option number.");
    }
  },

  // Method to display poll results
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are: ${this.answers.join(", ")}`);
    }
  },
};

// Create a button in your HTML
document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

// Bonus: Test data arrays
const testData1 = [5, 2, 3];
const testData2 = [1, 5, 3, 9, 6, 1];

// Using 'displayResults' with external test data
poll.displayResults.call({ answers: testData1 }, "array");
poll.displayResults.call({ answers: testData1 }, "string");
poll.displayResults.call({ answers: testData2 }, "array");
poll.displayResults.call({ answers: testData2 }, "string");

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
book.call(ghana, 45, "Charles"); // calling the function
console.log(ghana);

const ghana3 = {
  airline: "Ghana3 Airline",
  code: "GH3",
  booking: [],
};
book.call(ghana3, 50, "John"); // calling the function
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

//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS
const runOnce = function () {
  console.log("Only once");
};
runOnce();
//Creating a function without assiging to any variable
/*
function(){
conole.log("Only once")
}
*/ //THIS WILL NOT WORK

//HOW TO MAKE IT WORK
//by wrapping it with paranthesis ➡️ () and at the same time calling
(function () {
  conole.log("Only once");
});

//calling it
(function () {
  console.log("Only once");
})(); // () ➡️ at the end of the function expression to call it

//CLOSURES
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger(s)`);
  };
};

const bookNow = secureBooking();

bookNow(); //1 passenger(s)
bookNow(); //2 passenger(s)
bookNow(); //3 passenger(s)
bookNow(); //4 passenger(s)

/*
Coding Challenge #2
This is more of a thinking challenge than a coding challenge �
Your tasks:
1. Take the IIFE below and at the end of the function, attach an event listener that 
changes the color of the selected h1 element ('header') to blue, each time 
the body element is clicked. Do not select the h1 element again!
2. And now explain to yourself (or someone around you) why this worked! Take all 
the time you need. Think about when exactly the callback function is executed, 
and what that means for the variables involved in this example.
 (function () {
 const header = document.querySelector('h1');
 header.style.color = 'red';
 })()
 */

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  // Attach an event listener to the body element
  document.body.addEventListener("click", function () {
    header.style.color = "blue"; // Change the color of the h1 element to blue
  });
})();

//EXPLANATION
/*
1. Understanding IIFE (Immediately Invoked Function Expression)
An IIFE is a function that is executed immediately after it's defined. In our example:

The code inside the IIFE runs immediately, so header is selected and its color is initially set to red.
2. Event Listener Attachment
The line document.body.addEventListener('click', function () { ... }) attaches a click event listener to the body element.
This means that whenever you click anywhere on the body of the page, the function provided as the second argument will be executed.
3. When the Callback Function is Executed
The callback function function () { header.style.color = 'blue'; } does not run immediately. Instead, it runs only when the body is clicked.
When the body is clicked, the browser executes the callback function and changes the header color to blue.
4. Why This Works
Closure: A closure is created when a function retains access to its lexical scope (the environment in which it was declared), even after that outer function has finished executing.
In this case, even though the IIFE has completed its execution, the callback function still has access to the header variable. This is because the header variable is within the scope of the IIFE, and thanks to closures, the callback retains access to this variable.
5. Key Points
The header element is only selected once when the IIFE runs, and its reference is stored in the header variable.
The addEventListener function attaches the click event to body, but it doesn’t execute the callback immediately. It simply registers it to run later, upon a click event.
When you click the body, the registered callback is executed, and it accesses header from the closure, changing its color to blue.
Summary
The code works because:

The header variable is declared and set in the IIFE's scope.
The callback function forms a closure, retaining access to the header variable even after the IIFE completes.
Thus, when the body is clicked, the callback can still change header's color, making the code efficient and avoiding unnecessary re-selection of the h1 element.
*/

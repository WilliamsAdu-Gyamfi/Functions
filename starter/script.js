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

checkIn(flight, williams);
console.log(flight);
console.log(williams);

const flightNum = flight;
const passenger = williams;

// TWO FUNCTIONS MANUPULATING THE SAME OBJCT
//How interactions of different functions with the same object can create an issue
const newPassport = function (student) {
  student.passport = Math.trunc(Math.random() * 500);
};
newPassport(williams);
checkIn(flight, williams);

//CALLBACK FUNCTION
const greetings = function () {
  console.log("🤝");
};
document.body.addEventListener("click", greetings);
["Williams", "Adu", "Gyamfi"].forEach(greetings);

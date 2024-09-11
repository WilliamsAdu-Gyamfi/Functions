'use strict';

const flight = 'AB123';
const williams = {
  name: 'Williams Gyamfi',
  passport: 25364547,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'AB234';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 25364547) {
    alert('Checked In');
  } else {
    alert('Wrong Details');
  }
};

checkIn(flight, williams);
console.log(flight);
console.log(williams);

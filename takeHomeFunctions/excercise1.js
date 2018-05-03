// Excercise 1
var text = "";
var user = true;

while (user !== false) {
  console.log(`Hello World!`);
}

// Excercise 2

let question = prompt("Enter the language you speak");

  if (question === "French") {
      console.log("Bonjour!");
  } else if (language === "English"){
    console.log("Hello");
  } else {
    console.log("I don't speak your language, I apoligize");
  }

// Excercise 3

  let height = prompt("How tall are you in inches?");

    while ( height <= 54) {
      console.log("You are not tall enough");
     } if (height >= 54) {
       console.log("You are tall")
     }

// Excercise 4

 let number = prompt("Enter a number");

 for (number >= 0; number < number.length; number++) {
  console.log(number);
 }

 // Excercise 5
 
 /*Write these three functions: 
This function prompts the user to input their name then returns it.
This function asks the user what time of day it is, morning, noon, or night, and returns that time of day
This last function, takes the user’s name and takes in the time of day, and prints a message depending on the time of day 
For Morning say: `Good Morning ${name}`
For Noon say: `It’s lunchtime ${name}`
For Night say: `Time for bed ${name}`
*/

let name = prompt("Whats your name"); {
  return name;
}


function timeOfDay(morning, noon, night) {
  return timeOfDay;
}

function nameDay (name, timeOfDay) {
  if (timeOfDay === morning) {
    console.log(`Good Morning ${name}`);
  } else if (timeOfDay === noon) {
    console.log(`It's Lunchtime ${name}`);
  } else if (timeofDay === night) {
    console.log(`Time for bed ${name}`);
  }
}

// extra excercise for loop

for (let k = 1; k <= 20; k++) {
  console.log(k)
}

// while loop excercise on slides help!

let a = 10;
let text = "";

while (a < 17) {
  a++;
  console.log(`YOu are ${a} years old.`);
  
}
console.log(a);  

// while loop goig backwards

let a = 17;
let text = "";

while (a > 10) {
  a--;
  console.log(`You are ${a} years old`);
}
console.log(a);

// while loop just there is no end condition

let radius = prompt("pick a number you want to be your radius");
var text = "";

while (radius !== null) {
  area = (`${radius} * 3.14159;`)
  console.log(`The area of a circle with a radius of ${radius} is ${area}`);
}



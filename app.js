'use strict'

let askname = prompt("What is your name?");
alert(`Welcome ${askname}.`)

const myName = "Tom";
const myAge = "36";
const favMovie = "Star Wars";
const myHome = "Spokane";
const myTravel = "Taiwan";
let yesAnswer = "yes" || "y";
let noAnswer = "no" || "n";

let q1 = prompt("Is my name Tom?");
if (q1.toLowerCase == "yes" || "y"){
    alert(`Well done ${askname}, you guessed correctly that my name is ${myName}.`)
} else if (q1.toLowerCase == "no" || "n"){
    alert(`${askname}, that is incorrect.`);
} 
let q2 = prompt("Am I 45 years old?");

// -Am I 45 years old?

// -Is Titanic my favorite movie?

// -Do I live in Bellingham, WA?

// -Did I live in Taiwan?
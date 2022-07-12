'use strict'
let userName = prompt("What is your name?");
alert(`Welcome ${userName}.`);
//-------------------------------------------------------------------
const myName = "Tom";
const myAge = "36";
const favMovie = "Star Wars";
const myHome = "Spokane";
const myTravel = "Canada";
let score = 0;
//-------------------------------------------------------------------
let q1 = prompt(`Is ${myName} my name?`);
if(q1 == `yes`){
    alert(`Well done ${userName}, you guessed correctly that my name is ${myName}.`);
    score++;
} else if(q1 == `no`){
    alert(`FALSE. ${userName}, that is incorrect.`);
} else if(q1 == ''){
    alert(`${userName} clicked the "OK" button rather than answer.`);
} else if(q1 == null){
    alert(`${userName} clicked cancel for some reason..`);
};
// console.log(q1);
//-----------------------------------------------------------------------
let q2 = prompt(`Is ${myName} 45 years old?`);
if(q2 == "yes"){
    alert(`${userName}, that's way off. ${myName} is actually ${myAge}.`);
} else if(q2 == "no") {
    alert(`Correct ${userName}, ${myName} is actually ${myAge} years old.`);
    score++;
} else if(q2 == ''){
    alert(`${userName} clicked the "OK" button rather than answer yes or no.`);
} else if(q2 == null){
    alert(`${userName} clicked cancel for some reason..`);
};
//console.log(q2);
//-----------------------------------------------------------------------
let q3 = prompt(`Is ${myName}'s favorite film Titanic?`);
if(q3 == "yes") {
    alert(`FALSE! ${myName}'s favorite film is ${favMovie}.`);
} else if(q3 == "no"){
    alert(`CORRECT. ${myName}'s favorite movie is ${favMovie}.`);
    score++;
} else if(q3 == ""){
    alert(`The OK button is not an acceptable answer!`);
} else if(q3 == null){
    alert(`${userName}, the cancel button is not an answer!`);
};
// console.log(q3);
// -----------------------------------------------------------------------
let q4 = prompt(`Does ${myName} live in Bellingham, WA?`);
if(q4 == `yes`){
    alert(`FALSE. ${myName} lives in Spokane, WA.`);
} else if(q4 == `no`){
    alert(`CORRECT. ${myName} actually lives in Spokane, WA.`);
    score++;
}else if(q4 == ""){
    alert(`The OK button is not an acceptable answer!`);
} else if(q4 == null){
    alert(`${userName}, the cancel button is not an answer!`);
};
// console.log(q4);
// -----------------------------------------------------------------------
let q5 = prompt(`Did ${myName} ever live in Canada?`);
if(q5 == `yes`){
    alert(`Good guess ${userName}. ${myName} lived in Victoria, BC for several years.`);
    score++;
} else if(q5 == `no`){
    alert(`FALSE. ${myName} did live in ${myTravel}.`);
}else if(q5 == ""){
    alert(`${userName}, that is the OK button..`);
} else if(q5 == null){
    alert(`${userName}, the cancel button is not an answer!`);
};
// console.log(q5);
// -----------------------------------------------------------------------
alert(`${userName}, you have answered ${score} questions correctly.`)
document.write(`${userName}, here are the answers. My name is ${myName}, my age is ${myAge}, my favorite film is ${favMovie}, I live in ${myHome}, and I used to live in ${myTravel}. You answered ${score} out of 5 questions correctly.`)
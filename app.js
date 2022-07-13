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
//------------------------------------------------------------------- Question 1: Name
let q1 = prompt(`Is ${myName} my name?`);
if(q1.toLowerCase() == `yes` || q1.toLowerCase() == `y`){
    alert(`Well done ${userName}, you guessed correctly that my name is ${myName}.`);
    score++;
} else if(q1.toLowerCase() == `no` || q1.toLowerCase() == `n`){
    alert(`FALSE. ${userName}, that is incorrect.`);
} else if(q1 == '' || q1 == null){
    alert(`${userName}, I guess you'd rather not answer...`);
};
// console.log(q1);
//----------------------------------------------------------------------- Question 2: Age 
let q2 = prompt(`Is ${myName} 45 years old?`);
if(q2.toLowerCase() == `yes` || q2.toLowerCase() == `y`){
    alert(`${userName}, that's way off. ${myName} is actually ${myAge}.`);
} else if(q2.toLowerCase() == `no` || q2.toLowerCase() == `n`) {
    alert(`Correct ${userName}, ${myName} is actually ${myAge} years old.`);
    score++;
} else if(q2 == '' || q2 == null){
    alert(`${userName}, I guess you'd rather not answer...`);
};
//console.log(q2);
//----------------------------------------------------------------------- Question 3: Favorite Movie 
let q3 = prompt(`Is ${myName}'s favorite film Titanic?`);
if(q3.toLowerCase() == `yes` || q3.toLowerCase() == `y`) {
    alert(`FALSE! ${myName}'s favorite film is ${favMovie}.`);
} else if(q3.toLowerCase() == `no` || q3.toLowerCase() == `n`){
    alert(`CORRECT. ${myName}'s favorite movie is ${favMovie}.`);
    score++;
} else if(q3 == "" || q3 == null){
    alert(`Ok ${userName}, I guess you'd rather not answer...`);
};
// console.log(q3);
// ----------------------------------------------------------------------- Question 4: Home 
let q4 = prompt(`Does ${myName} live in Bellingham, WA?`);
if(q4.toLowerCase() == `yes` || q4.toLowerCase() == `y`){
    alert(`FALSE. ${myName} lives in Spokane, WA.`);
} else if(q4.toLowerCase() == `no` || q4.toLowerCase() == `n`){
    alert(`CORRECT. ${myName} actually lives in Spokane, WA.`);
    score++;
}else if(q4 == "" || q4 == null){
    alert(`Ok ${userName}, I guess you'd rather not answer...`);
};
// console.log(q4);
// ----------------------------------------------------------------------- Question 5: Foreign Living
let q5 = prompt(`Did ${myName} ever live in Canada?`);
if(q5.toLowerCase() == `yes` || q5.toLowerCase() == 'y'){
    alert(`Good guess ${userName}. ${myName} lived in Victoria, BC for several years.`);
    score++;
} else if(q5.toLowerCase() == `no` || q5.toLowerCase() == `n`){
    alert(`FALSE. ${myName} did live in ${myTravel} for a few years.`);
}else if(q5 == "" || q5 == null){
    alert(`Ok ${userName}, I guess you'd rather not answer...`);
};
// console.log(q5);
// -----------------------------------------------------------------------
alert(`${userName}, you have answered ${score} questions correctly.`)
document.write(`${userName}, here are the answers. My name is ${myName}, my age is ${myAge}, my favorite film is ${favMovie}, I live in ${myHome}, and I used to live in ${myTravel}.`);
document.write(`You answered ${score} out of 5 questions correctly.`);